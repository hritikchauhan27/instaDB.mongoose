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
const mongoose_1 = __importDefault(require("mongoose"));
const DATABASE_URL = "mongodb://localhost:27017";
"options";
{
    "sslValidate";
    false, "maxPoolSize";
    2, "minPoolSize";
    1, "appName";
    "NoSQLBoosterV8.0.13_101615.952";
    const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(DATABASE_URL);
            console.log('Connected Successfully...');
        }
        catch (error) {
            console.log(error);
        }
    });
    export default connectDB;
}
//# sourceMappingURL=connection.js.map