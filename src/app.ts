import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import config from './config';
import modules from './modules';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

export class App {
    private app: express.Application;
    private http: http.Server;

    constructor() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.config();
    }

    private config(): void {
        const limit: number = 100 * 1024 * 1024;

        this.app.disable('x-powered-by');
        this.app.set('port', config.port);
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: limit }));
        this.app.use(express.urlencoded({ limit: limit, extended: true }));
        this.app.use(bodyparser.json({ limit: limit }));
        this.app.use(bodyparser.urlencoded({ limit: limit, extended: true }));
        this.app.use('/api', modules);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    start(): void {
        this.http.listen(config.port, () => {
            console.log(`Server listening on port ${config.port}`);
        });
    }
}
