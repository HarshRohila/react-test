import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { alreadyExistsError, paramMissingError } from '@shared/constants';

export function badRequest(res: Response) {
	return res.status(StatusCodes.BAD_REQUEST).json({
		error: paramMissingError,
	});
}

export function alreadyExists(res: Response) {
	return res.status(StatusCodes.CONFLICT).json({
		error: alreadyExistsError,
	});
}

export function created(res: Response) {
	return res.status(StatusCodes.CREATED).end();
}
