"use strict";
//Mongoose model for a collection --> Post
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    post_id: { type: Number, required: true },
    user_id: { type: Number, ref: 'User', required: true },
    photo_url: { type: String, required: true },
    caption: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
const PostModel = (0, mongoose_1.model)('Post', postSchema);
exports.default = PostModel;
//# sourceMappingURL=post.model.js.map