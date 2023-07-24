import express from "express";
import {user_SignUp} from '../controllers/signup.controller'
import { update_follower } from "../controllers/count.controller"
import  {LoginUser}  from "../controllers/login.controller";
import {authenticateToken} from "../middleware/auth";
import { Logout } from "../controllers/logout.controller";
import {Sessions} from '../controllers/session.controller';
const router = express.Router();

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
router.post('/signup',user_SignUp);

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
router.post('/login',LoginUser.user_login);
router.get('/logout',Logout.logout_user);

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

router.get('/followRequest', update_follower);
// router.post('/updateSession',Sessions.maintain_session);

export  {router};