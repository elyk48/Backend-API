/*API router*/
import express from "express";
import { httpcreateEnvironment } from "../controller/app.controller.js";


/** Defining the router */
const BackendRouter = express.Router();


BackendRouter
.route('/CreateEnv')
.post(
 
   httpcreateEnvironment
);


export default BackendRouter;
