const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');

router.get('/search', (req, res) => {
	console.log('req: ' + JSON.stringify(req.params, null, 2));
	axios(
		`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${req.params.zipcode}`
	)
		.then((response) => {
			//console.log(JSON.stringify(response, null, 2));

			return res.send(response.data);
		})

		.catch((err) => console.error(err));
});

module.exports = router;
