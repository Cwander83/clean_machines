module.exports = (sequelize, DataTypes) => {
	const Rentals = sequelize.define('rentals', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		// product_id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// 	references: {
		// 		model: 'products',
		// 		key: 'id',
		// 	},
		//  },

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
			type: DataTypes.STRING,
		},
		end_date: {
			type: DataTypes.STRING,
		},
	});

	Rentals.associate = function (models) {
		Rentals.belongsTo(models.Products, { allowNull: false });

		// Rentals.belongsTo(models.Customers, {
		// 	allowNull: false,
		// });
	};
	return Rentals;
};
