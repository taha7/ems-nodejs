import { DataTypes } from 'sequelize';
import BaseModel from '../../lib/base-model';

class ConferenceClient extends BaseModel {
  static get HOLDED_STATUS() {
    return 0;
  }

  static get ACCEPTED_STATUS() {
    return 1;
  }

  static get REGISTERED_STATUS() {
    return 2;
  }

  static get CANCELLED_STATUS() {
    return 3;
  }

  static get DECLINED_STATUS() {
    return 4;
  }

  static initialize(sequelize) {
    return super.init(
      {
        conference_id: DataTypes.STRING,
        client_id: DataTypes.STRING,
        status: DataTypes.INTEGER,
        business_acceptance: DataTypes.INTEGER,
        business_acceptance_reason: DataTypes.TEXT,
        invitation_code: DataTypes.STRING,
        complete_survey: DataTypes.BOOLEAN,
        arrival_date: DataTypes.STRING,
        arrival_time: DataTypes.STRING,
        departure_date: DataTypes.STRING,
        departure_time: DataTypes.STRING,
        remarks: DataTypes.TEXT,
        available_slot: DataTypes.TEXT,
        is_disable: DataTypes.BOOLEAN,
        disable_reason: DataTypes.STRING,
        prefer_interview: DataTypes.BOOLEAN,
        registration_date: DataTypes.DATE
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

export default ConferenceClient;
