// Mongoose model for a collection --> likes

import { Schema, model } from 'mongoose';

interface Likes {
    user_id: number;
    post_id: number;
};

const likeSchema = new Schema({
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
});

export const LikesModel = model<Likes>('Likes', likeSchema);