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
  try {
    const login = await axios({
      method: 'post',
      url: 'http://b22ad469.ngrok.io/api/login/',
      data: {
        email, password,
      }
    });
     if(login.status === 200){
       res.redirect("/dashboard");
     }
  } catch (error) {
      res.render('dashboard');
      console.log(error.response)
  }

})

module.exports = router;
