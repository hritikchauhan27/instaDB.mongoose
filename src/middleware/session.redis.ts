import redis from "redis";
import { createClient } from "redis";
import {UserModel} from "../models/user.model";
import { authenticateToken } from "./auth";
import { Verify } from "./auth.user";

const client = createClient();

export class Redis{
    static async maintain_session_redis(user){
        await client.connect();
        client.on('error', err => console.log('Redis client error', err));
        try{
            if(user){
                await client.SET(user.username, JSON.stringify({
                    'user_id': user._id,
                    'status': true
                }));
                const session = await client.get(user.username);
                console.log(session);
            }
            else{
                console.log("User not found");
            }
        }
        catch(err){
            console.log(err);
        }
    }
}