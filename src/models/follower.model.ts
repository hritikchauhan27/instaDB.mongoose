//Mongoose model for a collection --> Follower

import { Schema, model } from 'mongoose';

interface Follower {
    sender_id: number;
    receiver_id: number;
    status: 'accept' | 'reject' | 'pending';
}

const followerSchema = new Schema<Follower>({
  sender_id: { type: Number, ref: 'User', required: true },
  receiver_id: { type: Number, ref: 'User', required: true },
  status: { type: String, enum: ['accept', 'reject', 'pending'], required: true },
});

export const FollowerModel = model<Follower>('Follower', followerSchema);
// export default FollowerModel;