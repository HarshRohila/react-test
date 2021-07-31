import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
	_id: String,
	password: String,
});
