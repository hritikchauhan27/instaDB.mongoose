// user sign-up and generating token api function

import { UserModel } from "../models/user.model";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const user_SignUp = async (req: any, res: any) => {
    const details = req.body;
    try {
        // await Validate.validateUser.validateAsync(details);
        const user = await UserModel.findOne({ username: details.username });
        console.log(user);
        if (!user){
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(details.password, salt);
            // console.log(hashpassword);
            const user_details = new UserModel({
                username: details.username,
                first_name: details.first_name,
                last_name : details.last_name,
                email: details.email,
                follower_count: details.follower_count,
                following_count: details.follower_count,
                post_count: details.post_count,
                password: hashpassword,
                bio: details.bio
            });
            const Details = await user_details.save();
            res.status(201).json({ message: "User Register Successfully" });
            console.log(Details);
        }
        else {
            res.status(404).json({ message: "User already exist" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
    // try {
    //     const user = new UserModel(req.body);
    //     await user.save();
    //     const token = jwt.sign({id:user.username},SECRET_KEY);
    //     console.log(token);
    //     res.status(200).json({status:"SignUp Success",token});
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send(error);
    // }
}

export {user_SignUp} ;