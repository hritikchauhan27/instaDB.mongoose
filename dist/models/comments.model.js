"use strict";
// Mongoose model for a collection --> Commment
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const replySchema = new mongoose_1.Schema({
    user_id: { type: Number, ref: 'User', required: true },
    // comment_id: { type: Number, ref: '', required: true },
    description: { type: String, required: true }
});
const commentSchema = new mongoose_1.Schema({
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
    comment_description: { type: String, required: true },
    replies: [replySchema]
});
exports.CommentModel = (0, mongoose_1.model)('Comments', commentSchema);
//# sourceMappingURL=comments.model.js.map