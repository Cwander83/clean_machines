module.exports = (sequelize, DataTypes) => {
	const Products = sequelize.define('products', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sale_price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		rental_price: {
			type: DataTypes.INTEGER,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sub_category: {
			type: DataTypes.STRING,
		},
		start_date: {
			type: DataTypes.STRING,
		},
		end_date: {
			type: DataTypes.STRING,
		},

		rental_active: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
		},
		sale_active: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
		},
		units: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
	});
	Products.associate = function (models) {
		// associations can be defined here
		Products.hasOne(models.Features, {
			foreignKey: 'product_id',
			as: 'features',
		});
	};

	return Products;
};
