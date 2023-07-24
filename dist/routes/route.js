"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const signup_controller_1 = require("../controllers/signup.controller");
const count_controller_1 = require("../controllers/count.controller");
const login_controller_1 = require("../controllers/login.controller");
const auth_1 = require("../middleware/auth");
const logout_controller_1 = require("../controllers/logout.controller");
const router = express_1.default.Router();
exports.router = router;
router.post('/signup', signup_controller_1.user_SignUp);
router.post('/login', login_controller_1.LoginUser.user_login);
router.get('/logout', logout_controller_1.Logout.logout_user);
router.get('/followRequest', auth_1.authenticateToken, count_controller_1.update_follower);
//# sourceMappingURL=route.js.map