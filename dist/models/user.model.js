"use strict";
//Mongoose model for a collection --> User
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    follower_count: { type: Number, required: true },
    following_count: { type: Number, required: true },
    post_count: { type: Number, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.model.js.map