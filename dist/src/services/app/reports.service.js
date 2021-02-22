"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = __importDefault(require("./base.service"));
const client_repository_1 = __importDefault(require("../../data/repositories/client-repository"));
class ReportsService extends base_service_1.default {
    constructor() {
        super();
        this.repos = this.repos.bind(this);
    }
    repos() {
        return {
            clientRepo: new client_repository_1.default(),
        };
    }
    availableSlotsReport() {
        return this.repos().clientRepo.listWithAvailability();
    }
}
exports.default = ReportsService;
//# sourceMappingURL=reports.service.js.map