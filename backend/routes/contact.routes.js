const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: process.env.GMAIL_HOST, //replace with your email provider
	port: process.env.GMAIL_PORT,
	auth: {
		user: process.env.GMAIL_USER, //replace with the email address
		pass: process.env.GMAIL_PASS, //replace with the password
	},
});

// verify connection configuration
transporter.verify(function (error, success) {
	if (error) console.error(error);

	if (success) console.log('success ' + success);
});
router.post('/send', (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const subject = 'general support';
	const message = req.body.message;
	const content = `name: ${name} \n email: ${email} \n phone #: ${phone} \n  message: ${message} `;
	const mail = {
		from: name,
		to: 'chriswandermail@gmail.com',
		subject: subject,
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

module.exports = router;
