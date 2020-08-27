const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
	const Rentals = sequelize.define('rentals', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},

		// total price
		rental_total: {
			type: DataTypes.INTEGER,
		},
		rental_days: {
			type: DataTypes.INTEGER,
		},

		start_date: {
			type: DataTypes.DATEONLY,
		},
		end_date: {
			type: DataTypes.DATEONLY,
		},
		rental_name: {
			type: DataTypes.STRING,
		},
		rental_line1: {
			type: DataTypes.STRING,
		},
		rental_line2: {
			type: DataTypes.STRING,
		},
		rental_city: {
			type: DataTypes.STRING,
		},
		rental_zipcode: {
			type: DataTypes.STRING,
		},
		rental_state: {
			type: DataTypes.STRING,
		},
	});

	Rentals.associate = function (models) {
		Rentals.belongsTo(models.Products, { allowNull: false });
	};
	return Rentals;
};
