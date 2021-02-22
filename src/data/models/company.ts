import { DataTypes } from 'sequelize';
import BaseModel from '../../lib/base-model';

class Company extends BaseModel {
  static initialize(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        activation: DataTypes.STRING,
        sector_id: DataTypes.STRING,
        country_id: DataTypes.STRING
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
  }

  // static initRelations(models) {
  // }
}

export default Company;
