const { Router } = require('express');
const axios = require('axios');
const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Olamide Samuel'
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Olamide Samuel || Contact'
  });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Olamide Samuel || Dashboard'
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Olamide Samuel || Login'
  });
});

router.post('/login', async (req, res) =>{
  const {email, password} = req.body;
 const login = await  axios.post('http://b22ad469.ngrok.io/api/login/');
 console.log(login);
 if(login.status === 200){
   res.redirect("/dashboard");
 }

})

module.exports = router;
