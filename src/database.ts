import mongoose from 'mongoose';
import config from './config';

export class Database {
    async connect(): Promise<void> {
        try {
            await mongoose.connect(config.dbUri, {
                dbName: config.dbName,
            });

            console.log('Database connected');
        } catch (error) {
            console.error('Error connecting to database: ', error);
        }
    }
}
