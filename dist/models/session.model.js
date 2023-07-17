"use strict";
//Mongoose model for a collection --> Session
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SessionSchema = new mongoose_1.Schema({
    user_id: { type: Number, ref: 'User', required: true },
    session_id: { type: Number, required: true },
    device_id: { type: Number, required: true },
    device_token: { type: String, required: true },
    device_type: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});
const SessionModel = (0, mongoose_1.model)('Session', SessionSchema);
exports.default = SessionModel;
//# sourceMappingURL=session.model.js.map