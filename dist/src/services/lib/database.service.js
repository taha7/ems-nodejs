"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DBService {
    static paginate(perPage = 20, page = 1) {
        return {
            subQuery: false,
            limit: Math.floor(perPage),
            offset: Math.floor(perPage * (page - 1))
        };
    }
}
exports.default = DBService;
//# sourceMappingURL=database.service.js.map