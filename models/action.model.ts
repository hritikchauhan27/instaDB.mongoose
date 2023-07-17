import { Schema, model } from 'mongoose';

interface Action {
    action_id: number;
    likes: {
      user_id: number;
      post_id: number;
    }[];
    comments: {
      comment_id: number;
      user_id: number;
      post_id: number;
      comment_description: string;
      replies: {
        reply_id: number;
        user_id: number;
        description: string;
      }[];
    }[];
    createdAt: Date;
    updatedAt: Date;
  }

const replySchema = new Schema({
  reply_id: { type: Number, required: true },
  user_id: { type: Number, ref: 'User', required: true },
  description: { type: String, required: true }
});

const commentSchema = new Schema({
  comment_id: { type: Number, required: true },
  user_id: { type: Number, ref: 'User', required: true },
  post_id: { type: Number, ref: 'Post', required: true },
  comment_description: { type: String, required: true },
  replies: [replySchema]
});

const likeSchema = new Schema({
  user_id: { type: Number, ref: 'User', required: true },
  post_id: { type: Number, ref: 'Post', required: true },
});

const actionSchema = new Schema<Action>({
  action_id: { type: Number, required: true },
  likes: [likeSchema],
  comments: [commentSchema],
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const ActionModel = model<Action>('Action', actionSchema);
export default ActionModel;