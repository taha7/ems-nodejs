import { DataTypes } from 'sequelize';
import BaseModel from '../../lib/base-model';
import InConf from '../../traits/in-conf.trait';

class Conference extends BaseModel {
  public inConf: Function;

  static initialize(sequelize) {
    this.addTrait(InConf);
    return super.init(
      {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        start_date: DataTypes.STRING,
        end_date: DataTypes.STRING,
        registeration_deadline: DataTypes.STRING,
        subdomain: DataTypes.STRING,
        enable_login: DataTypes.STRING,
        web_enable_preferences: DataTypes.STRING,
        web_enable_register: DataTypes.STRING,
        web_enable_remark_box: DataTypes.STRING,
        mobile_enable: DataTypes.STRING,
        small_group_definition: DataTypes.STRING,
        hotel_accommodation: DataTypes.STRING,
        split_days: DataTypes.STRING,
        investor_selection_limit: DataTypes.STRING,
        allow_big_groups: DataTypes.STRING,
        min_media_slot: DataTypes.STRING,
        max_media_slot: DataTypes.STRING,
        title: DataTypes.STRING,
        is_virtual: DataTypes.STRING,
        meeting_link_status: DataTypes.STRING
      },
      {
        scopes: {
          inConf: confId => new this().inConf.bind(this)(confId)
        },
        sequelize,
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
  }

  static initRelations(models) {
    this.belongsToMany(models.Client, {
      through: models.ConferenceClient,
      foreignKey: 'conference_id',
      as: 'clients'
    });
  }
}

export default Conference;
