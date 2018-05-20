exports.up = function(knex, Promise) {
  return knex.schema.createTable("card", function(table) {
    table.increments("id");
    table.text("title").notNullable();
    table.text("priority").notNullable();
    table
      .text("status")
      .defaultTo("queue")
      .notNullable();
    table.text("created_by").notNullable();
    table.text("assigned_to").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("card");
};
