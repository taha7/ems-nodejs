"use strict";
// import BaseMapper from '../../lib/base-mapper';
Object.defineProperty(exports, "__esModule", { value: true });
class AvailableSlotsDetailsMapper {
    static map(data, { slots }) {
        return data.map((item) => {
            const row = item.toJSON();
            const availabilityIds = JSON.parse(row.conferences.shift().conference_client.available_slot);
            return {
                id: row.id,
                title: row.title.name,
                name: row.full_name,
                company: row.company.name,
                client_type: row.client_type.name,
                availabilityIds: availabilityIds,
                available_slots: slots.filter((slot) => availabilityIds.find(slotId => slotId == slot.id)),
            };
        });
    }
    static paginate(data, { perPage = 20, page = 1, total }, extraData) {
        console.log('-----------------------------------', perPage, page);
        return {
            data: this.map(data, extraData),
            meta: {
                perPage,
                page,
                total,
            },
        };
    }
}
exports.default = AvailableSlotsDetailsMapper;
//# sourceMappingURL=available-slots-details.mapper.js.map