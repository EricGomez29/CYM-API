import express, { json } from 'express';
import morgan from 'morgan';

// import routes
import userRouter from './routes/users';

// initializations
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/users' , userRouter);

export default app;