import express from "express";
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import {router} from './routes/route';
import { connectToDatabase } from "./core/connection";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
connectToDatabase();

app.use('/',router);

app.listen(port, () => {
    console.log(`listning at http://locahost:${port}`);
})