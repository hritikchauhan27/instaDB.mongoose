import { PostModel } from "../models/post.model";

const post =async(req:any,res:any)=>{
    try {
        const postUpdate = new PostModel(req.body);
        await postUpdate.save();
        console.log(postUpdate);
        res.status(200).json({status:"post updated"});
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export {post};