"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../models/client"));
const base_repository_1 = __importDefault(require("../../lib/base-repository"));
const conference_1 = __importDefault(require("../models/conference"));
const conference_client_1 = __importDefault(require("../models/conference-client"));
const client_type_1 = __importDefault(require("../models/client-type"));
const title_1 = __importDefault(require("../models/title"));
const company_1 = __importDefault(require("../models/company"));
const query_builder_1 = __importDefault(require("../seuelize-builder/query-builder"));
const relation_builder_1 = __importDefault(require("../seuelize-builder/relation-builder"));
const through_builder_1 = __importDefault(require("../seuelize-builder/through-builder"));
class ClientRepository extends base_repository_1.default {
    get model() {
        return client_1.default;
    }
    listWithAvailability() {
        return this.listWithAvailabilityAppends();
        // return this.model.findAll(this.listWithAvailabilityAppends());
    }
    // listWithAvailabilityAppends(): Parameters<typeof BaseModel.findAll>[0] {
    listWithAvailabilityAppends() {
        return (new query_builder_1.default()
            .select(["id", "first_name", "family_name", [client_1.default.fullName, "full_name"]])
            // include current conference
            .include(new relation_builder_1.default(conference_1.default.scope({ method: ["inConf", 37] }))
            .select(["id", "name"])
            .as("conferences")
            // through conference_client table
            .through(new through_builder_1.default()
            .as("conference_client")
            .select(["available_slot"])
            .where({ status: conference_client_1.default.REGISTERED_STATUS })
            .apply())
            .apply())
            .include(new relation_builder_1.default(client_type_1.default.scope({
            method: ["typeIn", [client_type_1.default.PRESENTER_TYPE, client_type_1.default.INVESTOR_TYPE]],
        }))
            .select(["name", "type"])
            .as("client_type")
            .apply())
            .include(new relation_builder_1.default(title_1.default)
            .select(["name"])
            .as("title")
            .apply())
            .include(new relation_builder_1.default(company_1.default).as("company").apply())
            .order(["company", "name", "asc"])
            .order([client_1.default.fullName, "asc"])
            .apply());
        // return {
        //   attributes: ["id", "first_name", "family_name", [Client.fullName, "full_name"]],
        //   include: [
        //     {
        //       attributes: ["id", "name"],
        //       model: Conference.scope({ method: ["inConf", 37] }),
        //       as: "conferences",
        //       through: {
        //         as: "conference_client",
        //         attributes: ["available_slot"],
        //         where: {
        //           status: ConfClient.REGISTERED_STATUS,
        //         },
        //       },
        //     },
        //     {
        //       model: ClientType.scope({
        //         method: ["typeIn", [ClientType.PRESENTER_TYPE, ClientType.INVESTOR_TYPE]],
        //       }),
        //       as: "client_type",
        //       attributes: ["name", "type"],
        //     },
        //     {
        //       model: Title,
        //       as: "title",
        //       attributes: ["name"],
        //     },
        //     { model: Company, as: "company" },
        //   ],
        //   order: [
        //     ["company", "name", "asc"],
        //     [Client.fullName, "asc"],
        //   ],
        // };
    }
}
exports.default = ClientRepository;
//# sourceMappingURL=client-repository.js.map