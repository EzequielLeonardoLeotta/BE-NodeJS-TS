import express from 'express';
import routes from '../routes/index';
import cors from 'cors';

const server = express();
server.use(express.json());

server.get('/', (_: any, res: any) => res.send('be-node-js is up!'));
server.use(cors());
server.use('', routes);

export default server;