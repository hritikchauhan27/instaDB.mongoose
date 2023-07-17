import express from "express";
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';


import UserModel from './models/user.model';
import ActionModel from './models/action.model';
import PostModel from './models/post.model';
import SessionModel from './models/session.model';
import FollowerModel from './models/follower.model';
import { connectToDatabase } from "./core/connection";


const app = express();
dotenv.config();
const port = process.env.PORT;

connectToDatabase();
app.use(express.json());

app.listen(port, () => {
    console.log(`listning at http://locahost:${port}`);
})