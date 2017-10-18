
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {company_id: 1, first_name: 'John', last_name: 'Rifle',
          email: 'johnrifle@az.gov', position: 'IT Manager'}
      ]);
    });
};
