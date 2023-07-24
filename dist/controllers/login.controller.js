"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_user_1 = require("../middleware/auth.user");
const session_controller_1 = require("./session.controller");
const session_model_1 = require("../models/session.model");
const session_redis_1 = require("../middleware/session.redis");
dotenv_1.default.config();
class LoginUser {
    static user_login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = req.body;
            try {
                yield auth_user_1.Verify.verify_login_details.validateAsync(details);
                const user = yield user_model_1.UserModel.findOne({ email: details.email });
                console.log(user);
                if (user) {
                    const userSession = yield session_model_1.SessionModel.findOne({ user_id: user._id });
                    console.log(userSession);
                    if (!userSession || !userSession.status) {
                        const hash = user.password;
                        if (bcrypt_1.default.compare(details.password, hash)) {
                            const token = jsonwebtoken_1.default.sign({ email: details.email }, process.env.SECRET_KEY, { expiresIn: '2d' });
                            yield session_controller_1.Sessions.maintain_session(req, res, user, userSession);
                            yield session_redis_1.Redis.maintain_session_redis(user);
                            res.status(201).json({ message: "login successfully", isUser: user, token });
                            console.log(token);
                        }
                        else {
                            res.status(404).json({ message: "password is incorrect" });
                        }
                    }
                    else {
                        res.status(404).json({ message: "User is already active" });
                    }
                }
                else {
                    res.status(404).json({ status: "user not found" });
                }
            }
            catch (err) {
                res.status(500).json({ status: "Server Error" });
            }
        });
    }
}
exports.LoginUser = LoginUser;
//# sourceMappingURL=login.controller.js.map