import express from "express";

import * as authController from "../controllers/auth";

export const authRoutes = express.Router();

authRoutes.route('/signup')
.post(authController.signup)

authRoutes.route('/signin')
.post(authController.signin)

authRoutes.route('/verify')
.post(authController.verify)