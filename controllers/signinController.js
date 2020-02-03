const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config()
const secret = process.env.JWT_SECRET;


const signinForm = (req, res, next) => {
	let errors = []
	console.log(req.body.email)
	User.findOne({
		email: req.body.email
	}).then(user => {
		if (user) {
			bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
				if (isMatch) {
					//JWT dey here
					jwt.sign({ user: user.username }, secret,{expiresIn :"2h"}, (err, token)=>{
						res.cookie('auth', token);
						res.redirect('/dashboard');
					});					
				} else {
					errors.push({ text: "Wrong Password." })
					if (errors.length > 0) {
						res.render('login', {
							email: req.body.email,
							password: "",
							errors: errors
						});
					}
				}
			});
		} else {
			errors.push({ text: "Invalid Email. Please Sign up or make sure your email is correctly typed." });
			if (errors.length > 0) {
				res.render('login', {
					username: "",
					password: "",
					errors: errors
				});
			}

		}
	});
}

module.exports = {
	signinForm,
	
}
