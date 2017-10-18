
exports.up = function(knex, Promise) {
  return knex.schema.createTable('company', (table)=>{
    table.increments();
    table.string('name');
    table.string('description');
    table.integer('suite');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company')
};
