const { createPurchase, updateProducts } = require('../db/db');

const {
	calculateOrderAmount,
	createOrderNumber,
} = require('../stripe/helpers');

const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

module.exports = {
	createPayment: async (req, res) => {
		if (req.method === 'POST') {
			const { payment_method_id, userData, productData, totalData } = req.body;

			try {
				const totalPrice = await calculateOrderAmount(totalData);

				const order_number = await createOrderNumber();

				// TODO check inventory if still there
				console.log(`order_number: ${order_number}`);

				await stripe.paymentIntents.create({
					payment_method: payment_method_id,

					amount: totalPrice,
					confirm: true,

					setup_future_usage: 'on_session',
					receipt_email: userData.billing_email,
					shipping: {
						name: userData.billing_name,
						phone: userData.billing_phone,
						address: {
							city: userData.shipping.shipping_city,
							state: userData.shipping.shipping_state,
							line1: userData.shipping.shipping_line1,
							line2: userData.shipping.shipping_line2,
							postal_code: userData.shipping.shipping_postal_code,
						},
					},
					currency: 'usd',
					description: `${
						userData.billing_name
					} order number: ${order_number}, at ${new Date().toDateString()}`,
				});

				await createPurchase(userData, productData, totalPrice, order_number);

				await updateProducts(productData);

				return await res.status(200).send({
					confirm: true,
				});
			} catch (error) {
				console.error(error);
				return await res.status(400).json({
					error: error.message,
				});
			}
		} else {
			res.setHeader('Allow', 'POST');
			res.status(405).end('Method Not Allowed');
		}
	},
};
