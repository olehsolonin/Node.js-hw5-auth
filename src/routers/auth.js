import { Router } from "express";
import * as authControllers from '../controllers/auth.js';
import ctrlWrapper from "../utils/ctrlWrapper.js";
import validateBody from "../utils/validateBody.js";

import { userRegisterSchema, userSigninSchema } from '../validation/users.js';

const authRouter = Router();

authRouter.post("/register", validateBody(userRegisterSchema), ctrlWrapper(authControllers.registerController));

authRouter.post("/signin", validateBody(userSigninSchema), ctrlWrapper(authControllers.signinController));

authRouter.post("/refresh", ctrlWrapper(authControllers.refreshController));

authRouter.post("/signout", ctrlWrapper(authControllers.signoutController));

export default authRouter;