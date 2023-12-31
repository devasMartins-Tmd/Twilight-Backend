import express from 'express';
import cors from 'cors';
import color from 'colors';
import * as path from 'path';
import { connectToDB } from './config/db_connect';
import { configDotenv } from 'dotenv';

configDotenv({ path: './config/.env' });

const App = express();

//Middlewares
App.use(
   cors({
      origin: '*',
   })
);
// console.log(__dirname, '/dist');
App.use(express.json({ limit: '300mb' }));
App.use(express.urlencoded({ extended: true }));
App.use(express.static(path.join(__dirname, '/dist')));
App.set('port', 8503);

//routes
App.use('/', require('./route/authRoute'));
App.use('/', require('./route/postRoute'));
App.use('/', require('./route/exploreRoute'));
App.use('/', require('./route/friendRoute'));
App.use('/', require('./route/userRoute'));

//DB connect
connectToDB().then(() => {
   App.listen(App.get('port'), () => console.log(color.green(`App listening on port ${App.get('port')}`)));
});
