exports.up = function(knex, Promise) {
  return knex.schema.createTable("spirits-list", liquors => {
    liquors.increments("id");
    liquors.string("spirit");
    liquors.string("product");
    liquors.float("retail", 2, 2);
    liquors.float("price", 2, 2);
    liquors.string("tag", 2000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("spirits-list");
};
