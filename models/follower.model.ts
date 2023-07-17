//Mongoose model for a collection --> Follower

import { Schema, model } from 'mongoose';

interface Follower {
    sender_id: number;
    receiver_id: number;
    status: 'accept' | 'reject' | 'pending';
    createdAt: Date;
    updatedAt: Date;
}

const followerSchema = new Schema<Follower>({
  sender_id: { type: Number, ref: 'User', required: true },
  receiver_id: { type: Number, ref: 'User', required: true },
  status: { type: String, enum: ['accept', 'reject', 'pending'], required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const FollowerModel = model<Follower>('Follower', followerSchema);
export default FollowerModel;