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
		shipping_cost: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		units: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		short_description: { type: DataTypes.STRING },
		cord: {
			type: DataTypes.STRING,
		},
		weight: {
			type: DataTypes.STRING,
		},
		height: {
			type: DataTypes.STRING,
		},
		width: {
			type: DataTypes.STRING,
		},
		tools: {
			type: DataTypes.STRING,
		},
		motor: {
			type: DataTypes.STRING,
		},
		sound_pressure: {
			type: DataTypes.STRING,
		},
		container_capacity: {
			type: DataTypes.STRING,
		},
		tank_capacity: {
			type: DataTypes.STRING,
		},
		speed: {
			type: DataTypes.STRING,
		},
		size: {
			type: DataTypes.STRING,
		},

		feature_1: {
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
		number_of_images: {
			type: DataTypes.INTEGER,
		},
	});

	return Products;
};
