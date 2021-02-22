import BaseService from "./base.service";
import ClientRepository from "../../data/repositories/client-repository";

class ReportsService extends BaseService {
  constructor() {
    super();
    this.repos = this.repos.bind(this);
  }

  private repos() {
    return {
      clientRepo: new ClientRepository(),
    };
  }

  availableSlotsReport() {
    return this.repos().clientRepo.listWithAvailability();
  }
}

export default ReportsService;
