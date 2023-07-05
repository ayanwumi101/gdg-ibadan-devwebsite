import express from "express";
import passport from "passport";

import * as usersController from '../controllers/user';

export const userRoutes = express.Router();

userRoutes.get('/events/registered', passport.authenticate('jwt'), usersController.getRegisteredEvents);

userRoutes.get('/profile', passport.authenticate('jwt'), usersController.getProfile);