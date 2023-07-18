// Mongoose model for a collection --> Action

import { Schema, model } from 'mongoose';

interface Action {
    action_type: String;
    user_id: number;
    post_id: number;
}


const actionSchema = new Schema<Action>({
    action_type: { type: String, required: true },
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true }
});

export const ActionModel = model<Action>('Action', actionSchema);
