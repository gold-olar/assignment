const Contact = require('../models/Contact')
require('dotenv').config();

const contactForm = (req, res)=>{
    let errors = [];
        Contact.findOne({phone:req.body.phone})
        .then(contact =>{
          if (contact) {
            errors.push({ text: 'Sorry, Contact has already been saved.' });
              res.render('dashboard',{
               errors,
               
              });
            }else{
              const newContact = new Contact({
                firstName : req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone
              });
              newContact.save()
              .then(contact => {
                res.redirect('/dashboard');
              })
              .catch(err => {
                console.log(err);
                return;

              });
    
            }
    
    
        })
    
      
    

}
module.exports={
    contactForm
}
