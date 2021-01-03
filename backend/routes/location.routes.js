const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search/:zipcode', (req, res) => {
	//console.log('req: ' + req);

	axios(
		`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${req.query.zipcode}`
	)
		.then((response) => {
			//console.log(JSON.stringify(response, null, 2));

			return res.send(response);
		})

		.catch((err) => console.error(err));
});

module.exports = router;
