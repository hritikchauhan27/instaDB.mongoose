"use strict";
//Mongoose model for a collection --> Post
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    user_id: { type: String, ref: 'User', required: true },
    photo_url: { type: String, required: true },
    caption: { type: String, required: true },
});
exports.PostModel = (0, mongoose_1.model)('Post', postSchema);
// export default PostModel;
//# sourceMappingURL=post.model.js.map