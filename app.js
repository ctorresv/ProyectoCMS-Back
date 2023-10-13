import 'dotenv/config.js'
import "./config/database.js"
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import { __dirname } from './utils.js'
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'
const app = express();

const loggerOpts = { skip: () => process.env.NODE_ENV === 'test' }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev', loggerOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use(notFound)
app.use(errorHandler)

export default app;
