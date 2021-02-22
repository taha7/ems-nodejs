import { Request, Response } from 'express';

import Company from "../../data/models/company";
import Client from "../../data/models/client";
import Conference from "../../data/models/conference";
import ClientType from "../../data/models/client-type";
import ConfClient from "../../data/models/conference-client";
import AgendaSlot from "../../data/models/agenda-slot";
import Title from "../../data/models/title";
import Mapper from "../../mappers/reports/available-slots-details.mapper";
import ReportsService from "../../services/app/reports.service";


const service = new ReportsService();

class AvailableSlotDetailsController {
  constructor() {
    this.handle = this.handle.bind(this);
    this.show = this.show.bind(this);
    // this.queryAppends = this.queryAppends.bind(this);
  }

  show(req: Request, res: Response) {
    return res.render("admin/reports/available-slots-details");
  }

  async test(req: Request, res: Response) {
    const data = await Conference.scope({ method: ["inConf", 37] }).findAll();
    return res.json(data)
    // const data = await service.availableSlotsReport();
    // return res.send(data);
  }

  async handle(req: Request, res: Response) {
    let perPage: number = parseInt(req.query.perPage as string || null);
    let page: number = parseInt(req.query.page as string || null);

    // const data = await service.availableSlotsReport();
    const data = service.availableSlotsReport();

    return res.json(data);

    // try {
    //   const [data, total] = await Client.usePaginate(this.queryAppends(), { perPage, page });
    //   return res.json(Mapper.paginate(data, { perPage, page, total }, { slots: await AgendaSlot.findAll() }));
    // } catch (e) {
    //   return console.log(e);
    // }
  }
}

export default AvailableSlotDetailsController;
