import { DataTypes } from "sequelize";
import BaseModel from "../../lib/base-model";

class AgendaSlot extends BaseModel {
  static initialize(sequelize: any) {
    return super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        date: DataTypes.DATE,
        start_time: DataTypes.TIME,
        end_time: DataTypes.TIME,
        type: DataTypes.INTEGER,
        activation: DataTypes.BOOLEAN,
        conference_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }

  static initRelations(models) {
    this.belongsTo(models.Conference, { foreignKey: "conference_id", as: "conference" });
  }
}

export default AgendaSlot;
