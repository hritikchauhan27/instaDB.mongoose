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
exports.update_follower = void 0;
const user_model_1 = require("../models/user.model");
const update_follower = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recieverName = req.body.recieverName;
        const senderName = req.body.senderName;
        console.log(recieverName);
        console.log(senderName);
        const filter = { username: recieverName };
        const update = { $inc: { follower_count: 1 } };
        const result = yield user_model_1.UserModel.updateOne(filter, update);
        const filter1 = { username: senderName };
        const update1 = { $inc: { following_count: 1 } };
        const result1 = yield user_model_1.UserModel.updateOne(filter1, update1);
        //   console.log(result);
        //   console.log(result1);
        res.status(200).json({ status: "update successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.update_follower = update_follower;
//# sourceMappingURL=count.controller.js.map