import { DataTypes } from 'sequelize';
import db from '../../lib/database';
import BaseModel from '../../lib/base-model';

class Client extends BaseModel {
  static initialize(sequelize) {
    return super.init(
      {
        first_name: DataTypes.STRING,
        middle_name: DataTypes.STRING,
        family_name: DataTypes.STRING,
        job_title: DataTypes.STRING,
        email: DataTypes.STRING,
        telephone: DataTypes.STRING,
        mobile: DataTypes.STRING,
        fax: DataTypes.STRING,
        additional_email: DataTypes.STRING,
        assistant_name: DataTypes.STRING,
        assistant_phone: DataTypes.STRING,
        assistant_email: DataTypes.STRING,
        primary_signatory_id: DataTypes.STRING,
        secondary_signatory_id: DataTypes.STRING,
        country_id: DataTypes.STRING,
        title_id: DataTypes.INTEGER,
        company_id: DataTypes.INTEGER,
        client_type_id: DataTypes.INTEGER,
        name_format_type: DataTypes.STRING,
        sort: DataTypes.STRING,
        nationality_id: DataTypes.INTEGER,
        naming_convension: DataTypes.STRING
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

  // static get getterMethods() {
  //   return {
  //     fullTitledName: function() {
  //       return this.getDataValue
  //     }
  //   }
  // }

  static get fullName() {
    return db.Sequelize.literal("CONCAT(`Client`.`first_name`, ' ' ,`Client`.`family_name`)");
  }

  static initRelations(models) {
    this.belongsToMany(models.Conference, {
      through: models.ConferenceClient,
      foreignKey: 'client_id',
      as: 'conferences'
    });

    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
    this.belongsTo(models.ClientType, { as: 'client_type', foreignKey: 'client_type_id' });
    this.belongsTo(models.Title, { as: 'title', foreignKey: 'title_id' });
  }
}

export default Client;
