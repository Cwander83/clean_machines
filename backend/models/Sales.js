module.exports = (sequelize, DataTypes) => {
	const Sales = sequelize.define('sales', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		shipping_name: {
			type: DataTypes.STRING,
		},
		shipping_line1: {
			type: DataTypes.STRING,
		},
		shipping_line2: {
			type: DataTypes.STRING,
		},
		shipping_city: {
			type: DataTypes.STRING,
		},
		shipping_zipcode: {
			type: DataTypes.STRING,
		},
		shipping_state: {
			type: DataTypes.STRING,
		},
		stripe_id: {
			type: DataTypes.STRING,
		},

		// total price
		total: {
			type: DataTypes.INTEGER,
		},
		products_purchased: {
			type: DataTypes.INTEGER,
		},
	});
	Sales.associate = function (models) {
		Sales.belongsTo(models.Products, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Sales;
};
