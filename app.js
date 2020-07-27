require('dotenv').config();
const cors = require('cors');
const express = require('express');
// TODO: add a stripe key
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
// const uuid = require('uuid');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
	res.send('it works!!');
});

app.post('/add', (req, res) => {
	return stripe.products
		.create({
			name: 'TEst2000',
			metadata: {
				weight: '14lbs',
				power_cord: '11 feet',

				0: 'Triple action deep cleaning formula with Scotchgard',
				2: 'Cleaner, defoamer, odor neutralizer, carpet refresher All-in-one',
				3: 'Effectively powers out tough ground-in dirt, stubborn stains, underlying odors, embedded allergens, dust, pet dander pollen and more!',
			},
		})

		.then((result) => res.status(200).json(result))
		.catch((err) => console.log(err));
});
app.get('/product', (req, res) => {
	return stripe.products
		.retrieve('prod_Hilf9wWYwPXFPf')

		.then((result) => res.status(200).json(result))
		.catch((err) => console.log(err));
});

// listen
app.listen(8282, () => console.log('LISTENING AT PORT 8282'));
// const { product, token } = req.body;

// console.log('PRODUCT', product);
// console.log('PRICE', product.price);
// const customerKey = Math.floor(Math.random() * 100);
