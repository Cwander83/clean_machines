const db = require('../config/config');
const moment = require('moment');
const { Op } = require('sequelize');

module.exports = {
	createPurchase: async (userData, productData, customer) => {
		console.log(`create Rentals`);
		console.log(
			'product CREATEPURCHASE: ' + JSON.stringify(productData, null, 2)
		);
		// console.log('length: ' + items.rental.length);
		// console.log('customer: ' + JSON.stringify(dbCustomer, null, 2));

		productData.forEach((obj, i) => {
			if (obj.type === 'rental') {
				db.Rentals.create({
					productId: obj.productId,
					rental_total: obj.total,
					start_date: obj.start_date,
					end_date: obj.end_date,
					customer_stripe_id: customer.id,
					billing_name: userData.billing_name,
					billing_company_name: userData.billing_company_name,
					billing_email: userData.billing_email,
					billing_phone: userData.billing_phone,
					billing_line1: userData.billing_line1,
					billing_line2: userData.billing_line2,
					billing_city: userData.billing_city,
					billing_zipcode: userData.billing_postal_code,
					billing_state: userData.billing_state,

					delivery_name: userData.delivery.delivery_name,
					delivery_company_name: userData.delivery.delivery_company_name,
					delivery_email: userData.delivery.delivery_email,
					delivery_phone: userData.delivery.delivery_phone,
					delivery_line1: userData.delivery.delivery_line1,
					delivery_line2: userData.delivery.delivery_line2,
					delivery_city: userData.delivery.delivery_city,
					delivery_zipcode: userData.delivery.delivery_postal_code,
					delivery_state: userData.delivery.delivery_state,
				})
					.then((result) => console.log('created Rental: ' + result))
					.catch((err) => console.error(err));
			}
			if (obj.type === 'sale') {
				db.Sales.create({
					productId: obj.productId,
					quantity_purchased: obj.quantity,
					total_price: obj.total,
					price_per_unit: obj.price_per_unit,
					customer_stripe_id: customer.id,
					billing_name: userData.billing_name,
					billing_company_name: userData.billing_company_name,
					billing_email: userData.billing_email,
					billing_phone: userData.billing_phone,
					billing_line1: userData.billing_line1,
					billing_line2: userData.billing_line2,
					billing_city: userData.billing_city,
					billing_zipcode: userData.billing_postal_code,
					billing_state: userData.billing_state,

					shipping_name: userData.shipping.shipping_name,
					shipping_company_name: userData.shipping.shipping_company_name,
					shipping_email: userData.shipping.shipping_email,
					shipping_phone: userData.shipping.shipping_phone,
					shipping_line1: userData.shipping.shipping_line1,
					shipping_line2: userData.shipping.shipping_line2,
					shipping_city: userData.shipping.shipping_city,
					shipping_zipcode: userData.shipping.shipping_postal_code,
					shipping_state: userData.shipping.shipping_state,
				})
					.then((result) => console.log('created Sale: ' + result))
					.catch((err) => console.error(err));
			}
		});

		// for (let i = 0; i < items.rental.length; i++) {
		// 	db.Products.findOne({
		// 		where: { id: items.rental[i].product_id },
		// 	})
		// 		.then((product) => {
		// 			db.Rentals.create({
		// 				customerId: dbCustomer[0].id,
		// 				productId: product.id,
		// 				rental_price_day: items.rental[i].rental_price_day,
		// 				rental_days: items.rental[i].rental_days,
		// 				start_date: items.rental[i].rental_start_date,
		// 				location: items.rental[i].location,
		// 				end_date: items.rental[i].rental_end_date,
		// 				deposit: items.rental[i].deposit,
		// 			});
		// 		})

		// 		.catch((err) => console.error(err));
		// }
	},

	// createDbCustomer: (items, customer) => {
	// 	return db.Customers.findOrCreate({
	// 		where: { stripe_id: customer.id },

	// 		defaults: { stripe_id: customer.id, email: items.email },
	// 	});
	// },
	createRentalAndSales: async (items, customer) => {
		console.log(`create Rentals`);
		// console.log('items: ' + JSON.stringify(items, null, 2));
		// console.log('length: ' + items.rental.length);
		// console.log('customer: ' + JSON.stringify(customer, null, 2));

		for (let i = 0; i < items.rental.length; i++) {
			db.Products.findOne({
				where: { id: items.rental[i].product_id },
			})
				.then((product) => {
					db.Rentals.create({
						customerId: customer[0].id,
						productId: product.id,
						rental_price_day: items.rental[i].rental_price_day,
						rental_days: items.rental[i].rental_days,
						start_date: items.rental[i].rental_start_date,
						location: items.rental[i].location,
						end_date: items.rental[i].rental_end_date,
						deposit: items.rental[i].deposit,
					});
				})

				.catch((err) => console.error(err));
		}

		for (let i = 0; i < items.sales.length; i++) {
			db.Products.findOne({
				where: { id: items.sales[i].product_id },
			})
				.then((product) => {
					db.Sales.create({
						customerId: customer[0].id,
						productId: product.id,
						units: items.sales[i].units,
						price_per_unit: items.sales[i].price_per_unit,
					});
				})

				.catch((err) => console.error(err));
		}
	},
	createSales: async (items, dbCustomer) => {
		console.log(`create Rentals`);
		// console.log('items: ' + JSON.stringify(items, null, 2));
		// console.log('length: ' + items.rental.length);
		// console.log('customer: ' + JSON.stringify(dbCustomer, null, 2));

		for (let i = 0; i < items.rental.length; i++) {
			db.Products.findOne({
				where: { id: items.sales[i].product_id },
			})
				.then((product) => {
					db.Sales.create({
						customerId: dbCustomer[0].id,
						productId: product.id,
						units: items.sales[i].units,
						price_per_unit: items.sales[i].price_per_unit,
					});
				})

				.catch((err) => console.error(err));
		}
	},
};
