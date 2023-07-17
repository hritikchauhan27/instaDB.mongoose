"use strict";
//Mongoose model for a collection --> User
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    user_id: { type: Number, required: true },
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    follower_count: { type: Number, required: true },
    following_count: { type: Number, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map