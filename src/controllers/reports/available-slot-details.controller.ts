import { Request, Response } from 'express';

import Mapper from "../../mappers/reports/available-slots-details.mapper";
import ReportsService from "../../services/app/reports.service";


const service = new ReportsService();

class AvailableSlotDetailsController {
  constructor() {
    this.handle = this.handle.bind(this);
    this.show = this.show.bind(this);
  }

  show(req: Request, res: Response) {
    return res.render("admin/reports/available-slots-details");
  }

  async handle(req: Request, res: Response) {
  }
}

export default AvailableSlotDetailsController;
