module.exports = (sequelize, DataTypes) => {
	const RentalProducts = sequelize.define('rentalProducts', {
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

		rental_day: {
			type: DataTypes.INTEGER,
		},
		rental_two_day: {
			type: DataTypes.INTEGER,
		},
		rental_week: {
			type: DataTypes.INTEGER,
		},

		category: {
			type: DataTypes.STRING,
			allowNull: false,
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

	return RentalProducts;
};
