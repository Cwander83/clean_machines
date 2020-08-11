module.exports = (sequelize, DataTypes) => {
	const Sales = sequelize.define('sales', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
	
		// total price
		price_per_unit: {
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
