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
			allowNull: false,
		},

		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sub_category: {
			type: DataTypes.STRING,
		},
		rental_units: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		units: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		feature_0: {
			type: DataTypes.STRING,
		},
		feature_1: {
			type: DataTypes.STRING,
		},
		feature_2: {
			type: DataTypes.STRING,
		},
		feature_3: {
			type: DataTypes.STRING,
		},
		feature_4: {
			type: DataTypes.STRING,
		},
		feature_5: {
			type: DataTypes.STRING,
		},
		feature_6: {
			type: DataTypes.STRING,
		},
		feature_7: {
			type: DataTypes.STRING,
		},
		feature_8: {
			type: DataTypes.STRING,
		},
		feature_9: {
			type: DataTypes.STRING,
		},
	});


	return Products;
};
