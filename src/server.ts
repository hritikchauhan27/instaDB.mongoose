import express from "express";
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import {router} from './routes/route';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { connectToDatabase } from "./core/connection";

const options:swaggerJSDoc.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Instagram",
            version: "1.0.0"
        },
        schemas:['http', 'https'],
        servers: [
        {
            url: "http://localhost:3000/"
        }
        ]
    },
    apis: ['./src/swagger/user.servicedoc.yaml'],
};


const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
connectToDatabase();

app.use('/',router);

const swaggerDocument = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`listning at http://locahost:${port}`);
})