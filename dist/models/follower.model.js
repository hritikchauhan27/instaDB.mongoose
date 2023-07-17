"use strict";
//Mongoose model for a collection --> Follower
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const followerSchema = new mongoose_1.Schema({
    sender_id: { type: Number, ref: 'User', required: true },
    receiver_id: { type: Number, ref: 'User', required: true },
    status: { type: String, enum: ['accept', 'reject', 'pending'], required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
const FollowerModel = (0, mongoose_1.model)('Follower', followerSchema);
exports.default = FollowerModel;
//# sourceMappingURL=follower.model.js.map