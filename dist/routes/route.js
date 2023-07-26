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
const post_controller_1 = require("../controllers/post.controller");
const router = express_1.default.Router();
exports.router = router;
// /**
//  * @openapi
//  * /signup:
//  *   post:
//  *     tags: 
//  *     - User Signup and Login Section
//  *     description: User can register by filling the entries.
//  *     requestBody:
//  *       description: User can register. 
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               first_name:
//  *                 type: string
//  *               last_name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *               follower_count:
//  *                 type: number   
//  *               following_count:
//  *                 type: number 
//  *               post_count:
//  *                 type: number  
//  *               password:
//  *                 type: string   
//  *               bio:
//  *                 type: string
//  *     responses:
//  *       '201':
//  *         description: Created.
//  *       '406':
//  *         description: Value not accepted.
//  *       '500':
//  *         description: Inernal server error. 
//  */
router.post('/signup', signup_controller_1.user_SignUp);
// /**
//  * @openai
//  * /login:
//  *   post:
//  *    tags: 
//  *    - User Signup and Login Section
//  *    description: User can login by filling the entries.
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
//  *              email:
//  *                type: string
//  *              password:
//  *                type: string  
//  *    responses:
//  *      '200':
//  *        description: Authorized.
//  *      '401':
//  *        description: Unauthorized Response.
//  *      '500':
//  *        description: Inernal server error.
//  */
router.post('/login', login_controller_1.LoginUser.user_login);
router.get('/logout', logout_controller_1.Logout.logout_user);
// /followRequest:
// post:
//   summary: Update follower count for the receiver and following count for the sender.
//   tags: [Follower and Following count Section]
//   requestBody:
//     required: true
//     content:
//       application/json:
//         schema:
//           type: object
//           properties:
//             recieverName:
//               type: string
//             senderName:
//               type: string
//   responses:
//     '200':
//       description: Update successful.
router.get('/followRequest', auth_1.authenticateToken, count_controller_1.update_follower);
router.post('/post', post_controller_1.post);
//# sourceMappingURL=route.js.map