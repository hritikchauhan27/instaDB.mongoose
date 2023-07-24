"use strict";
// user sign-up and generating token api function
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
exports.user_SignUp = void 0;
const user_model_1 = require("../models/user.model");
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
const user_SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const details = req.body;
    try {
        // await Validate.validateUser.validateAsync(details);
        const isUser = yield user_model_1.UserModel.find({ username: details.username });
        console.log(isUser);
        if (!isUser.length) {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashpassword = yield bcrypt_1.default.hash(details.password, salt);
            // console.log(hashpassword);
            const user_details = new user_model_1.UserModel({
                username: details.username,
                first_name: details.first_name,
                last_name: details.last_name,
                email: details.email,
                follower_count: details.follower_count,
                following_count: details.follower_count,
                post_count: details.post_count,
                password: hashpassword,
                bio: details.bio
            });
            const Details = yield user_details.save();
            res.status(201).json({ message: "User Register Successfully" });
            console.log(Details);
        }
        else {
            res.status(404).json({ message: "Username already exist" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
    // try {
    //     const user = new UserModel(req.body);
    //     await user.save();
    //     const token = jwt.sign({id:user.username},SECRET_KEY);
    //     console.log(token);
    //     res.status(200).json({status:"SignUp Success",token});
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send(error);
    // }
});
exports.user_SignUp = user_SignUp;
//# sourceMappingURL=signup.controller.js.map