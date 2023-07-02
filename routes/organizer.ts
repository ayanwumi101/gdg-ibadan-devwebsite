import express from "express";
import passport from "passport";

import * as organizersController from '../controllers/organizer';

const organizersRoutes = express.Router();

organizersRoutes.route('/event')
.post(passport.authenticate('jwt'), organizersController.createEvent)

organizersRoutes.get('/events/created', passport.authenticate('jwt'), organizersController.getCreatedEvents)

organizersRoutes.post('/events/:id/createCheckIn', organizersController.createCheckIn)

organizersRoutes.post('/events/:eventID/scan/:scannerID', organizersController.scan)

export default organizersRoutes