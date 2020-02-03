const { Router } = require('express');
const router = Router();
const signupControler = require('../controllers/signupController');
const signinControler = require('../controllers/signinController');
const contactControler = require('../controllers/contactController');
const Contact = require('../models/Contact')



/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Olamide Samuel'
  });
});


router.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Olamide Samuel ||  SignUp'
  });
});

router.post('/signup', signupControler.signupForm);


router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Olamide Samuel || Login'
  });
});

router.post('/login', signinControler.signinForm);


router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Olamide Samuel || Contact'
  });
});



router.get('/dashboard', (req, res) => {
  Contact.find()
    .then(contacts => {
      res.render('dashboard', {
        title: 'Olamide Samuel || Dashboard',
        contacts,
      });
    });


});
router.post('/create-contact', contactControler.contactForm);

router.post('/edit/:id', (req, res) => {
  Contact.findOne({ _id: req.params.id })
    .then(contact => {
      contact.firstName = req.body.firstName;
      contact.lastName = req.body.lastName;
      contact.phone = req.body.phone;

      contact.save()
        .then(contact => {
          res.redirect('/dashboard');
        })
    });
})

router.get('/edit/:id', (req, res) => {
  Contact.findOne({
    _id: req.params.id
  })
    .then(contact => {
      res.render('edit', {
        title: 'Olamide Samuel || Edit',
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
        id: contact.id,
      });
    });

});


router.get('/delete/:id', (req, res) => {
  Contact.deleteOne({_id: req.params.id})
  .then(contact=>{
      res.redirect('/dashboard');
  })

})

module.exports = router;
