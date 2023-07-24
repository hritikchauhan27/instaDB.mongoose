import { UserModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Verify } from "../middleware/auth.user";
import { Sessions } from "./session.controller";
import { SessionModel } from "../models/session.model";
import { Redis } from "../middleware/session.redis";

dotenv.config();

export class LoginUser{
    static async user_login(req,res){
        const details = req.body;
        try{
          const device =req.headers.device;
            await Verify.verify_login_details.validateAsync(details);
            const user = await UserModel.findOne({email:details.email});
            console.log(user);
            if(user){
                const userSession = await SessionModel.findOne({user_id: user._id});
                console.log(userSession);
                if(!userSession || !userSession.status){
                    const hash = user.password;
                    if(bcrypt.compare(details.password, hash)){
                        const token = jwt.sign({email: details.email}, process.env.SECRET_KEY, {expiresIn: '2d'} );
                        await Sessions.maintain_session(req,res,device, user,userSession); 
                        await Redis.maintain_session_redis(user, device);
                        res.status(201).json({message: "login successfully", isUser: user, token});
                        console.log(token);
                        
                    }
                    else{
                        res.status(404).json({message: "password is incorrect"});
                    }
                }
                else{
                    res.status(404).json({message: "User is already active"})
                }
            }
            else {
                res.status(404).json({ status: "user not found" });
            }
        }
        catch(err){
            res.status(500).json({status: "Server Error"});
        }
    }
}