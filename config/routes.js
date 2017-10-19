//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);
  app.get('/newcomp', template.newcompany); //to get to create company page
  app.post('/createcompany', template.createCompany); // Creating company
  app.get('/member', template.member); //to get to create member page
  app.post('/createMember', template.createMember); // Creating new member
  app.get('/profile/:id', template.profile); //Profile page
  app.post('/edit/:id', template.edit); //Company Profile edit
  app.get('/delete/:id', template.deletecompany); //Profile page
  app.get('/editmember/:id', template.oneMember); //Member profile page
}
