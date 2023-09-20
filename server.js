/* Defining the cors configuration to run the server*/
import http from 'http';
import app from './src/app.js';
import dotenv from 'dotenv';

/* Accessing .env content */
dotenv.config();

/* Defining server's HOSTNAME & PORT */
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

/* Creating the server */
const server = http.createServer(app);

/* Launching the server */
server.listen(port, () => {
   console.log(`Listening to [http://${hostname}:${port}]...`);
});
