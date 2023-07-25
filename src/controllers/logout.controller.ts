import {UserModel} from "../models/user.model";
import { Redis } from "../middleware/session.redis";
import {SessionModel} from "../models/session.model";
import { Verify } from "../middleware/auth.user";
import { createClient } from "redis";

const redisClient = createClient();
redisClient.connect();
redisClient.on('error', err => console.log('Redis client error', err));

export class Logout{
    static async logout_user(req: any, res:any){
        try{
            const userToken = await Verify.verify_token(req.headers.authorization);
            const user = await UserModel.findOne({email: userToken.email});
            console.log(user)
            if(user){
                const id = user.id;
                const userSession = await SessionModel.findOne({user_id: id});
                console.log(userSession);
                if(user){
                    if(userSession.status){
                        await Redis.logout_session_redis(redisClient,user);
                        const updatedUserSession = await SessionModel.findOneAndUpdate({_id: userSession.id}, {status: !userSession.status});
                        // console.log(updatedUserSession);
                        res.status(201).json({message: "User logOut Successfully"});
                    }
                    else{
                        res.status(404).json({message:"User is already inactive"});
                    }
                }
                else{
                    res.status(404).json({message: "Session not found"});
                }
            }
            else{
                res.status(404).json({message:"User not found"});
            }

        }
        catch(err){
            res.status(500).json({message: "Server Error"});
        }
    }
    
}