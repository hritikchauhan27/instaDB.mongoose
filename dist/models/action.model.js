"use strict";
// Mongoose model for a collection --> Action
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionModel = void 0;
const mongoose_1 = require("mongoose");
const actionSchema = new mongoose_1.Schema({
    action_type: { type: String, required: true },
    user_id: { type: Number, ref: 'User', required: true },
    post_id: { type: Number, ref: 'Post', required: true }
});
exports.ActionModel = (0, mongoose_1.model)('Action', actionSchema);
//# sourceMappingURL=action.model.js.map