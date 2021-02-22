class DBService {
  static paginate(perPage: number = 20, page: number = 1) {
    return {
      subQuery: false,
      limit: Math.floor(perPage),
      offset: Math.floor(perPage * (page - 1))
    };
  }
}

export default DBService;
