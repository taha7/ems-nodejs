import Client from "../models/client";
import BaseRepository from "../../lib/base-repository";
import Conference from "../models/conference";
import ConfClient from "../models/conference-client";
import ClientType from "../models/client-type";
import Title from "../models/title";
import Company from "../models/company";
import Query from "../seuelize-builder/query-builder";
import { FindOptions } from "sequelize/types";
import Relation from "../seuelize-builder/relation-builder";
import Through from "../seuelize-builder/through-builder";

class ClientRepository extends BaseRepository {
  get model(): typeof Client {
    return Client;
  }

  listWithAvailability() {
    return this.listWithAvailabilityAppends();
    // return this.model.findAll(this.listWithAvailabilityAppends());
  }

  // listWithAvailabilityAppends(): Parameters<typeof BaseModel.findAll>[0] {
  listWithAvailabilityAppends(): FindOptions {
    return (
      new Query()
        .select(["id", "first_name", "family_name", [Client.fullName, "full_name"]])
        // include current conference
        .include(
          new Relation(Conference.scope({ method: ["inConf", 37] }))
            .select(["id", "name"])
            .as("conferences")
            // through conference_client table
            .through(
              new Through()
                .as("conference_client")
                .select(["available_slot"])
                .where({ status: ConfClient.REGISTERED_STATUS })
                .apply()
            )
            .apply()
        )
        .include(
          new Relation(
            ClientType.scope({
              method: ["typeIn", [ClientType.PRESENTER_TYPE, ClientType.INVESTOR_TYPE]],
            })
          )
            .select(["name", "type"])
            .as("client_type")
            .apply()
        )
        .include(
          new Relation(Title)
            .select(["name"])
            .as("title")
            .apply()
        )
        .include(new Relation(Company).as("company").apply())
        .order(["company", "name", "asc"])
        .order([Client.fullName, "asc"])
        .apply()
    );
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

export default ClientRepository;
