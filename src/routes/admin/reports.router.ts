import express from "express";
import AvailableSlotDetailsController from "../../controllers/reports/available-slot-details.controller";

const reportsRouter = express.Router();

reportsRouter.get("/show/available-slots-details", new AvailableSlotDetailsController().show);
reportsRouter.get("/api/available-slots-details", new AvailableSlotDetailsController().handle);

reportsRouter.get("/test/available-slots-details", new AvailableSlotDetailsController().test);

export default reportsRouter;
