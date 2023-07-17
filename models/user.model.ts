//Mongoose model for a collection --> User

import { Schema, model } from 'mongoose';

interface User {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    follower_count: number;
    following_count: number;
    password: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<User>({
    user_id: { type: Number, required: true },
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    follower_count: { type: Number, required: true },
    following_count: { type: Number, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  });


const UserModel = model<User>('User', userSchema);

export default UserModel;