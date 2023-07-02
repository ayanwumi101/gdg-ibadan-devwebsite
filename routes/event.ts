import express, { RequestHandler } from "express";
import passport from "passport";

import * as eventController from "../controllers/event";

export const eventRoutes = express.Router();

const optionalAuth: RequestHandler = (req, res, next) => {
    if (req.headers.authorization) {
      // Apply passport.authenticate('jwt') middleware
      passport.authenticate('jwt', { session: false })(req, res, next);
    } else {
      // Skip authentication and proceed to the next middleware or route handler
      next();
    }
  };

eventRoutes.route('/events')
.get( eventController.getAllEvents)

eventRoutes.route('/event/:id')
.get( eventController.viewEvent)

eventRoutes.route('/event/:id/register')
.post(optionalAuth, eventController.register4Event)