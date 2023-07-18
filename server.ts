import express from "express";
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import { connectToDatabase } from "./core/connection";

const app = express();
dotenv.config();
const port = process.env.PORT;

connectToDatabase();
app.use(express.json());

app.listen(port, () => {
    console.log(`listning at http://locahost:${port}`);
})