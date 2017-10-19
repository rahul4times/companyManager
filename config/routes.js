//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);
  app.get('/newcomp', template.newcompany); //to get to create page
  app.post('/createcompany', template.createCompany); // submitting company
  app.get('/member', template.member); //to get to create page
  app.post('/createMember', template.createMember); // submitting company
  app.get('/profile/:id', template.profile); //Profile page

}
