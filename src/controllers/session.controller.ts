import { SessionModel } from "../models/session.model";
import { Verify } from "../middleware/auth.user";
import { UserModel } from "../models/user.model";
import { Redis } from "../middleware/session.redis";

export class Sessions{
    static async maintain_session(req: any, res: any, user ,userSession){
        try{

            if(user){
                if(!userSession){
                    const session_details = new SessionModel({
                        user_id: user.id,
                        status: true
                    });
                    const session = await session_details.save();
                    console.log("Session stored successfully");
                    console.log(session);
                }
                else if(userSession){
                    if(!userSession.status){
                        await SessionModel.findOneAndUpdate({user_id: user}, {status: !userSession.status});
                        console.log("Session Activate");
                    }
                }
                // await Redis.maintain_session_redis(token,user);
            }
            else{
                // res.status(404).json({message: "User Not Found"});
                console.log("User not found");
            }
        }
        catch(err){
            // res.status(500).json({message: "Server Error", err});
            console.log("Server Error")
        }
    }
}