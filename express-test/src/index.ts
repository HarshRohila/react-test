import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import createConnection from './db/createConnection';

createConnection()
	.then(() => {
		const port = Number(process.env.PORT || 3000);
		app.listen(port, () => {
			logger.info('Express server started on port: ' + port);
		});
	})
	.catch((err) => {
		console.log('Connection to DB Failed with error', err);
	});
