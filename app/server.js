import express from 'express';

import userRouter from './router/api/userRoutes.js';

import { init_mariadb, check_table } from './mariadb.js';
import { init_mongodb } from './mongodb.js';

const app = express();
const port = 9888;

app.use(express.json());

init_mariadb();
init_mongodb();

await check_table();

app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log('Server is running...');
});