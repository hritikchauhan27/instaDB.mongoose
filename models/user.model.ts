//Mongoose model for a collection --> User

import { Schema, model } from 'mongoose';

interface User {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    follower_count: number;
    following_count: number;
    post_count: number;
    password: string;
    bio: string;
}

const userSchema = new Schema<User>({
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    follower_count: { type: Number, required: true },
    following_count: { type: Number, required: true },
    post_count: { type: Number, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
  });


export const UserModel = model<User>('User', userSchema);