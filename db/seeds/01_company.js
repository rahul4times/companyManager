
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {name: 'Dunkin Doughnut', description: 'IT office', suite: 15}
      ]);
    });
};
