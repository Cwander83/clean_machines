const db = require('../config/config');

module.exports = {
	createPurchase: async (userData, productData, order_number) => {
		// console.log(`create Rentals`);
		// console.log(
		// 	'product CREATE PURCHASE: ' + JSON.stringify(productData, null, 2)
		// );

		productData.forEach((obj) => {
			obj.type === 'rental'
				? db.Rentals.create({
						rentalProductId: obj.productId,
						start_date: obj.start_date,
						end_date: obj.end_date,
						order_number: order_number,
						// billing
						billing_name: userData.billing_name,
						billing_email: userData.billing_email,
						billing_phone: userData.billing_phone,
						billing_line1: userData.billing_line1,
						billing_line2: userData.billing_line2,
						billing_city: userData.billing_city,
						billing_zipcode: userData.billing_postal_code,
						billing_state: userData.billing_state,
						// delivery
						delivery_name: userData.billing_name,
						delivery_email: userData.billing_email,
						delivery_phone: userData.billing_phone,
						delivery_line1: userData.shipping.shipping_line1,
						delivery_line2: userData.shipping.shipping_line2,
						delivery_city: userData.shipping.shipping_city,
						delivery_zipcode: userData.shipping.shipping_postal_code,
						delivery_state: userData.shipping.shipping_state,
				  })
						// TODO remove before prod

						.then((result) => console.log('created Rental: ' + result))
						.catch((err) => console.error(err))
				: db.Sales.create({
						productId: obj.productId,
						quantity_purchased: obj.quantity,
						total_price: obj.price * obj.quantity + obj.shipping,
						price_per_unit: obj.price,
						order_number: order_number,
						// billing
						billing_name: userData.billing_name,
						billing_email: userData.billing_email,
						billing_phone: userData.billing_phone,
						billing_line1: userData.billing_line1,
						billing_line2: userData.billing_line2,
						billing_city: userData.billing_city,
						billing_zipcode: userData.billing_postal_code,
						billing_state: userData.billing_state,
						// shipping
						shipping_name: userData.billing_name,
						shipping_email: userData.billing_email,
						shipping_phone: userData.billing_phone,
						shipping_line1: userData.shipping.shipping_line1,
						shipping_line2: userData.shipping.shipping_line2,
						shipping_city: userData.shipping.shipping_city,
						shipping_zipcode: userData.shipping.shipping_postal_code,
						shipping_state: userData.shipping.shipping_state,
				  })
						.then((result) => console.log('created Sale: ' + result))
						.catch((err) => console.error(err));
		});
	},
	findAllSalesById: (id) => {
		return db.Sales.findAll({
			where: {
				customer_stripe_id: id,
			},
			order: [['id', 'DESC']],
		});
	},

	findAllRentalsById: (id) => {
		return db.Rentals.findAll({
			where: {
				customer_stripe_id: id,
			},
			order: [['id', 'DESC']],
		});
	},
	findRentalById: (id) => {
		return db.Rentals.findAll({
			where: {
				customer_stripe_id: id,
			},
			order: [['id', 'DESC']],
		});
	},

	// updates products(sales table) with new quantity
	updateProducts: (data) => {
		data.forEach((obj) => {
			if (obj.type === 'sale')
				db.Products.findOne({ where: obj.id })
					.then((result) =>
						result.update({ units: result.units - obj.quantity })
					)
					.catch((err) => console.error(err));
		});
	},
};
