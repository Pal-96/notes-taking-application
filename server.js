import express from 'express';
import dotenv from 'dotenv';
import initialize from "./backend/app.js";
dotenv.config();
const app = express(); //To get the instance of the app
const port = process.env.SERVER_PORT //env provides all the environment variables
initialize(app);
app.listen(port, () => console.log(`Server is running on ${port}`));
