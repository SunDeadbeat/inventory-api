import { App } from './app';
import { Database } from './database';

const app = new App();
const database = new Database();

database.connect();
app.start();
