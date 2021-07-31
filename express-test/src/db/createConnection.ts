import mongoose from 'mongoose';

export default async function createConnection() {
	mongoose.connect(
		'mongodb+srv://harsh:urhacked@cluster0.abliv.mongodb.net/react?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);

	return new Promise((resolve, reject) => {
		const db = mongoose.connection;
		db.on('error', (error) => reject(error));
		db.once('open', function () {
			// we're connected!
			resolve('connected');
		});
	});
}
