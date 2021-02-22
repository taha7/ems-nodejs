"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const available_slot_details_controller_1 = __importDefault(require("../../controllers/reports/available-slot-details.controller"));
const reportsRouter = express_1.default.Router();
reportsRouter.get("/show/available-slots-details", new available_slot_details_controller_1.default().show);
reportsRouter.get("/api/available-slots-details", new available_slot_details_controller_1.default().handle);
reportsRouter.get("/test/available-slots-details", new available_slot_details_controller_1.default().test);
exports.default = reportsRouter;
//# sourceMappingURL=reports.router.js.map