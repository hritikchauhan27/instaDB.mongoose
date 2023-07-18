"use strict";
//Mongoose model for a collection --> Follower
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerModel = void 0;
const mongoose_1 = require("mongoose");
const followerSchema = new mongoose_1.Schema({
    sender_id: { type: Number, ref: 'User', required: true },
    receiver_id: { type: Number, ref: 'User', required: true },
    status: { type: String, enum: ['accept', 'reject', 'pending'], required: true },
});
exports.FollowerModel = (0, mongoose_1.model)('Follower', followerSchema);
// export default FollowerModel;
//# sourceMappingURL=follower.model.js.map