
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table)=>{
    table.increments();
    table.integer('company_id')
    .notNullable()
    .references('id')
    .inTable('company')
    .onDelete('CASCADE')
    .index();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('position');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('member');
};
