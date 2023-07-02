import express from "express";
import passport from "passport";

import * as organizersController from '../controllers/organizer';

const organizersRoutes = express.Router();

organizersRoutes.route('/event')
.post(passport.authenticate('jwt'), organizersController.createEvent)

organizersRoutes.get('/events/created', passport.authenticate('jwt'), organizersController.getCreatedEvents)

organizersRoutes.patch('/event/:id/edit', passport.authenticate('jwt'), organizersController.editEvent)

organizersRoutes.delete('/event/:id/delete', passport.authenticate('jwt'), organizersController.deleteEvent)

organizersRoutes.post('/event/:id/createCheckIn', organizersController.createCheckIn)

organizersRoutes.post('/event/:eventID/scan/:scannerID', organizersController.scan)

export default organizersRoutes;