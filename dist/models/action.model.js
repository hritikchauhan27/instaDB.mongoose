"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const replySchema = new mongoose_1.Schema({
    reply_id: { type: Number, required: true },
    user_id: { type: Number, ref: 'User', required: true },
    description: { type: String, required: true }
});
const commentSchema = new mongoose_1.Schema({
    comment_id: { type: Number, required: true },
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
    comment_description: { type: String, required: true },
    replies: [replySchema]
});
const likeSchema = new mongoose_1.Schema({
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
});
const actionSchema = new mongoose_1.Schema({
    action_id: { type: Number, required: true },
    likes: [likeSchema],
    comments: [commentSchema],
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
const ActionModel = (0, mongoose_1.model)('Action', actionSchema);
exports.default = ActionModel;
//# sourceMappingURL=action.model.js.map