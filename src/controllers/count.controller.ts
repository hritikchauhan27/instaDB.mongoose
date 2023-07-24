import { UserModel } from "../models/user.model";

  
const update_follower = async(req: any, res: any) =>{
    try{
      const recieverName = req.body.recieverName;
      const senderName = req.body.senderName;
      console.log(recieverName);
      console.log(senderName);
      

      const filter = { username: recieverName};
      const update = { $inc: { follower_count: 1 }};
      const result = await UserModel.updateOne(filter,update);

      const filter1 = { username: senderName};
      const update1 = { $inc: { following_count: 1 }};
      const result1 = await UserModel.updateOne(filter1,update1);
      
    //   console.log(result);
    //   console.log(result1);
      res.status(200).json({status:"update successfully"});      
    }
    catch(error){
      console.log(error);
    }
  }

//   UserModel.updateOne(
//     { username: name},
//     { $inc: { follower_count: 1 } }
//   );
//   res.send(result);

export {update_follower};