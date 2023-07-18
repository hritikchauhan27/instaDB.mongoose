"use strict";
// Mongoose model for a collection --> likes
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesModel = void 0;
const mongoose_1 = require("mongoose");
;
const likeSchema = new mongoose_1.Schema({
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true },
});
exports.LikesModel = (0, mongoose_1.model)('Likes', likeSchema);
//# sourceMappingURL=likes.model.js.map