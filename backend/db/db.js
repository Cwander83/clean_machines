const db = require('../config/config');
const moment = require('moment');
const { Op } = require('sequelize');

module.exports = {
	createRental: async (items, dbCustomer) => {
		console.log(`create Rentals`);
		// console.log('items: ' + JSON.stringify(items, null, 2));
		// console.log('length: ' + items.rental.length);
		// console.log('customer: ' + JSON.stringify(dbCustomer, null, 2));

		for (let i = 0; i < items.rental.length; i++) {
			db.Products.findOne({
				where: { id: items.rental[i].product_id },
			})
				.then((product) => {
					db.Rentals.create({
						customerId: dbCustomer[0].id,
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
	},

	createDbCustomer: (items, customer) => {
		return db.Customers.findOrCreate({
			where: { stripe_id: customer.id },

			defaults: { stripe_id: customer.id, email: items.email },
		});
	},
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
