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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
const user_model_1 = require("../models/user.model");
const session_redis_1 = require("../middleware/session.redis");
const session_model_1 = require("../models/session.model");
const auth_user_1 = require("../middleware/auth.user");
class Logout {
    static logout_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userToken = yield auth_user_1.Verify.verify_token(req.headers.authorization);
                const user = yield user_model_1.UserModel.findOne({ email: userToken.email });
                console.log(user);
                if (user) {
                    const id = user.id;
                    const userSession = yield session_model_1.SessionModel.findOne({ user_id: id });
                    if (userSession) {
                        if (userSession.status) {
                            session_redis_1.Redis.logout_session_redis(userSession);
                            yield session_model_1.SessionModel.findOneAndUpdate({ _id: userSession.id }, { status: userSession.status });
                            res.status(201).json({ message: "User logOut Successfully" });
                        }
                        else {
                            res.status(404).json({ message: "User is already inactive" });
                        }
                    }
                    else {
                        res.status(404).json({ message: "Session not found" });
                    }
                }
                else {
                    res.status(404).json({ message: "User not found" });
                }
            }
            catch (err) {
                res.status(500).json({ message: "Server Error" });
            }
        });
    }
}
exports.Logout = Logout;
//# sourceMappingURL=logout.controller.js.map