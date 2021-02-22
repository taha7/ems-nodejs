import { DataTypes, Op } from "sequelize";
import BaseModel from "../../lib/base-model";

class ClientType extends BaseModel {
  static get INVESTOR_TYPE() {
    return 1;
  }

  static get PRESENTER_TYPE() {
    return 2;
  }

  static get OTHER_TYPE() {
    return 3;
  }

  static initialize(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        activation: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        scopes: this.associatedScopes,
        sequelize,
        underscored: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }

  static get associatedScopes() {
    return {
      typeIn(types) {
        return {
          where: {
            type: { [Op.in]: types },
          },
        };
      },
      investors: {
        where: {
          type: this.INVESTOR_TYPE,
        },
      },
      presenters: {
        where: {
          type: this.PRESENTER_TYPE,
        },
      },
    };
  }

  static initRelations(models) {
    this.hasMany(models.Client, { foreignKey: "client_type_id", as: "clients" });
  }
}

export default ClientType;
