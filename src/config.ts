import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

export default {
    port: process.env.PORT ?? 3000,
    dbUri: process.env.DB_URI ?? '',
    dbName: process.env.DB_NAME ?? '',
}
