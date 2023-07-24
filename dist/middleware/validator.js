"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const schema = joi_1.default.object().keys({
    username: joi_1.default.string().min(3).max(30).required(),
    email: joi_1.default.string().email().lowercase().required(),
    password: joi_1.default.string().min(2).required(),
});
exports.schema = schema;
//# sourceMappingURL=validator.js.map