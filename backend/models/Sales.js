module.exports = (sequelize, DataTypes) => {
	const Sales = sequelize.define('sales', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		billing_name: {
			type: DataTypes.STRING,
		},

		billing_email: {
			type: DataTypes.STRING,
		},
		billing_phone: {
			type: DataTypes.STRING,
		},
		billing_line1: {
			type: DataTypes.STRING,
		},
		billing_line2: {
			type: DataTypes.STRING,
		},
		billing_city: {
			type: DataTypes.STRING,
		},
		billing_zipcode: {
			type: DataTypes.STRING,
		},
		billing_state: {
			type: DataTypes.STRING,
		},
		shipping_name: {
			type: DataTypes.STRING,
		},

		shipping_email: {
			type: DataTypes.STRING,
		},
		shipping_phone: {
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
		order_number: {
			type: DataTypes.STRING,
		},

		// total price
		total_price: {
			type: DataTypes.INTEGER,
		},
		price_per_unit: {
			type: DataTypes.INTEGER,
		},
		quantity_purchased: {
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
