const knex = require("../db/knex.js");

module.exports = {
  // Displaying all companies on index page
  index: function(req, res) {
    knex('company')
    .then((result) => {
      res.render('index', {companies: result})
    })
    .catch((err) => {
      console.error(err)
    });
  },
  // Creating new company here
  createCompany: function(req, res){
    knex('company')
      .insert({
        name: req.body.name,
        description: req.body.description,
        suite: req.body.suite
      }, "*")
      .then((result)=>{
        console.log(result);
        res.redirect("/")
      })
      .catch((err) => {
        console.error(err)
      });
  },
  // getting to create page for company
  newcompany: function(req, res) {
    knex('company')
    .then((result) => {
      res.render('createc', {result: result})
    })
    .catch((err) => {
      console.error(err)
    });

  },

  // getting to create member page
  member: function(req, res) {
    knex('company')
    .then((result) => {
      res.render('createmember', {result: result})
    })
    .catch((err) => {
      console.error(err)
    });

  },

  // Creating new company here
  createMember: function(req, res){
    knex('member')
      .insert({
        company_id: req.body.company_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        position: req.body.position
      }, "*")
      .then((result)=>{

        res.redirect("/")
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // Getting to company profile page
  profile: function(req, res) {
    knex.select()
      .from('company')
      .where('id', req.params.id)
      .then(function(company){
        knex.select()
          .from('member')
          .where('company_id', req.params.id)
          .orderBy('id')
          .then(function(member) {
              res.render('profile', {companyObject: company[0], memberObject: member});
            });
          })
      //})

    .catch((err) => {
      console.error(err)
    });

  },

// Edit company
  edit: function(req, res) {
    knex('company')
      .update({
        name: req.body.name,
        description: req.body.description,
        suite: req.body.suite
      })
      .where('id', req.params.id)
      .then((result) => {
        console.log(req.body);
        res.redirect('/profile/' + req.params.id);

      })
      .catch((err) => {
        console.log("THIS ERROR");
        console.error(err);
        res.sendStatus(400);
      });
  },

// Delete Company
  deletecompany: function(req, res) {
    knex('company')
      .del()
      .where('id', req.params.id)
      .then((result) => {
        console.log(result);
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  oneMember: function(req, res) {
    knex('member')
    .where('id', req.params.id)
    .then((result) => {
      console.log(result);
      res.render('editmember', {oneMemberObject: result[0]})
    })
    .catch((err) => {
      console.error(err)
    });
  }
}
