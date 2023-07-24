//Mongoose model for a collection --> Session

import { boolean } from 'joi';
import { Schema, model } from 'mongoose';

interface Session {
    user_id: string;
    // device_id: number;
    status:boolean;
  }

const SessionSchema = new Schema<Session>({
  user_id: { type: String, ref: 'User', required: true },
  // device_id: { type: Number, required: true },
  status: {type: Boolean, required:true}
});

export const SessionModel = model<Session>('Session', SessionSchema);
// export default SessionModel;