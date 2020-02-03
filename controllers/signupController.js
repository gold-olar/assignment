const User = require('../models/User');
const bcrypt= require('bcryptjs');

const signupForm = (req, res)=>{
  let errors = [];
  
  if (errors.length > 0 ){
    res.render('signup',{
      errors: errors,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
  }else{
    User.findOne({email:req.body.email})
    .then(user =>{
      if (user) {
        errors.push({ text: 'Sorry, Email has already been registered.' });
          res.render('signup',{
            errors: errors,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: "",
            email: "",
            password: req.body.password,
          });
        }else{
          const newUser = new User({
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          });
          bcrypt.genSalt(10,(err, salt)=>{
              bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  res.redirect('/login');
                })
                .catch(err => {
                  console.log(err);
                  return;

                });
            });


          })

        }


    })

  }
}



module.exports={
    signupForm
}