const database = require("./database-connection");

module.exports = {
  listAll() {
    return database("spirits-list");
  },
  getById(id) {
    return database("spirits-list").where("id", id);
  },
  deleteLiquor(id) {
    return database("spirits-list")
      .where("id", id)
      .delete();
  },
  createLiquor(pushLiquor) {
    return database("spirits-list")
      .insert(pushLiquor)
      .returning("*");
  },
  updateLiquor(id, liquor) {
    return database("spirits-list")
      .where("id", id)
      .update(liquor)
      .returning("*");
  }
};
