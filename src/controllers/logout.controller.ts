import {UserModel} from "../models/user.model";
import { Redis } from "../middleware/session.redis";
import { Sessions} from "./session.controller";
import {SessionModel} from "../models/session.model";
import { authenticateToken } from "../middleware/auth";
import { Verify } from "../middleware/auth.user";

export class Logout{
    static async logout_user(req: any, res:any){
        try{
            const user = await Verify.verify_token(req.headers.authorization);
            const isUser = await UserModel.find({email: user.email});
            console.log(isUser)
            if(isUser){
                const id = isUser[0]._id;
                const isSession = await SessionModel.find({user_id: id});
                if(isSession){
                    if(isSession[0].status){
                        await SessionModel.findOneAndUpdate({_id: isSession[0]._id}, {status: !isSession[0].status});
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