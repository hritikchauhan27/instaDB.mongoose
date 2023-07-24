import express from "express";
import {user_SignUp} from '../controllers/signup.controller'
import { update_follower } from "../controllers/count.controller"
import  {LoginUser}  from "../controllers/login.controller";
import {authenticateToken} from "../middleware/auth";
import { Logout } from "../controllers/logout.controller";
import {Sessions} from '../controllers/session.controller';
const router = express.Router();

router.post('/signup',user_SignUp);
router.post('/login',LoginUser.user_login);
router.get('/logout',Logout.logout_user);
router.get('/followRequest',authenticateToken, update_follower);
// router.post('/updateSession',Sessions.maintain_session);

export  {router};