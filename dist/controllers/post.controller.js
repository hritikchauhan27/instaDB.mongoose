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
exports.post = void 0;
const post_model_1 = require("../models/post.model");
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postUpdate = new post_model_1.PostModel(req.body);
        yield postUpdate.save();
        console.log(postUpdate);
        res.status(200).json({ status: "post updated" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
exports.post = post;
//# sourceMappingURL=post.controller.js.map