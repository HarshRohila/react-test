import { Router } from 'express';
import { authMW } from './middleware';
import { login, logout } from './Auth';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { userSchema } from 'src/schemas';
import { badRequest, created, alreadyExists } from 'src/utils/responses';
import bcrypt from 'bcrypt';
import { pwdSaltRounds } from '@shared/constants';

async function createToken(req: Request, res: Response) {
	const User = mongoose.model('User', userSchema);

	const newUser = new User(req.body);

	// @ts-ignore
	newUser.save(function (err, newUser) {
		if (err) return console.error(err);
		console.log(newUser);
	});

	return res.status(StatusCodes.CREATED).end();
}

async function createUser(req: Request, res: Response) {
	const UserModel = mongoose.model('User', userSchema);

	const { email, password } = req.body;

	if (!(email && password)) {
		return badRequest(res);
	}

	const userAlreadyExists = await UserModel.findById(email).exec();
	if (userAlreadyExists) {
		alreadyExists(res);
	}

	const pwdHash = await bcrypt.hash(password, pwdSaltRounds);
	const newUser = new UserModel({ pwdHash, _id: email });
	await newUser.save();

	return created(res);
}

// Auth router
const authRouter = Router();
authRouter.post('/login', login);
authRouter.get('/logout', logout);

// User-router
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/auth', authRouter);
// baseRouter.use('/users', adminMW, userRouter);

baseRouter.post('/token', createToken);
baseRouter.post('/users', createUser);
baseRouter.get('/users/me', authMW, getLoggedInUser);

async function getLoggedInUser(req: Request, res: Response) {
	// @ts-ignore
	const sessionUser = res.sessionUser;
	console.log(sessionUser);
	const UserModel = mongoose.model('User', userSchema);
	const user = await UserModel.findById(sessionUser.id).exec();
	if (user) {
		res.status(StatusCodes.OK).json({ email: user._id });
	}

	res.status(StatusCodes.UNAUTHORIZED).end();
}

export default baseRouter;
