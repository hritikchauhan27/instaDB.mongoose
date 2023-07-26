//Mongoose model for a collection --> Post

import { Schema, model } from 'mongoose';

interface Post {
    user_id: string;
    photo_url: string;
    caption: string;
}

const postSchema = new Schema<Post>({
  user_id: { type: String, ref: 'User', required: true },
  photo_url: { type: String, required: true },
  caption: { type: String, required: true },
});

export const PostModel = model<Post>('Post', postSchema);

// export default PostModel;