"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conference_1 = __importDefault(require("../../data/models/conference"));
const reports_service_1 = __importDefault(require("../../services/app/reports.service"));
const service = new reports_service_1.default();
class AvailableSlotDetailsController {
    constructor() {
        this.handle = this.handle.bind(this);
        this.show = this.show.bind(this);
        // this.queryAppends = this.queryAppends.bind(this);
    }
    show(req, res) {
        return res.render("admin/reports/available-slots-details");
    }
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield conference_1.default.scope({ method: ["inConf", 37] }).findAll();
            return res.json(data);
            // const data = await service.availableSlotsReport();
            // return res.send(data);
        });
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let perPage = parseInt(req.query.perPage || null);
            let page = parseInt(req.query.page || null);
            // const data = await service.availableSlotsReport();
            const data = service.availableSlotsReport();
            return res.json(data);
            // try {
            //   const [data, total] = await Client.usePaginate(this.queryAppends(), { perPage, page });
            //   return res.json(Mapper.paginate(data, { perPage, page, total }, { slots: await AgendaSlot.findAll() }));
            // } catch (e) {
            //   return console.log(e);
            // }
        });
    }
}
exports.default = AvailableSlotDetailsController;
//# sourceMappingURL=available-slot-details.controller.js.map