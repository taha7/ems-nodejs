import { DataTypes } from 'sequelize';
import BaseModel from '../../lib/base-model';

class Title extends BaseModel {
  static initialize(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        activation: DataTypes.STRING
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

  static initRelations(models) {
    this.hasMany(models.Client, { foreignKey: 'title_id', as: 'clients' });
  }
}

export default Title;
