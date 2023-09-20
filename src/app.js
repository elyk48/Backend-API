/*this file sets up an Express.js server*/
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import BackendRouter from './routes/routes.js';
import Docker from 'dockerode';
import simpleGit from 'simple-git';
/* Accessing .env content */
dotenv.config();

/* Creating express app */
const app = express();





app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Initialize Docker client */
const docker = new Docker()

/* Using routers */
app.use('/api', BackendRouter);






export default  app; 