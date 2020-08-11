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
		rental_price_day: {
			type: DataTypes.INTEGER,
		},
		rental_days: {
			type: DataTypes.INTEGER,
		},
		deposit: {
			type: DataTypes.INTEGER,
		},

		start_date: {
			type: DataTypes.DATEONLY,
		},
		end_date: {
			type: DataTypes.DATEONLY,
		},
		location: {
			type: DataTypes.STRING,
		},
	});

	Rentals.associate = function (models) {
		Rentals.belongsTo(models.Products, { allowNull: false });
	};
	return Rentals;
};
