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

		start_date: {
			type: DataTypes.DATEONLY,
		},
		end_date: {
			type: DataTypes.DATEONLY,
		},
		order_number: {
			type: DataTypes.STRING,
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
		delivery_name: {
			type: DataTypes.STRING,
		},

		delivery_email: {
			type: DataTypes.STRING,
		},
		delivery_phone: {
			type: DataTypes.STRING,
		},
		delivery_line1: {
			type: DataTypes.STRING,
		},
		delivery_line2: {
			type: DataTypes.STRING,
		},
		delivery_city: {
			type: DataTypes.STRING,
		},
		delivery_zipcode: {
			type: DataTypes.STRING,
		},
		delivery_state: {
			type: DataTypes.STRING,
		},
	});

	Rentals.associate = function (models) {
		Rentals.belongsTo(models.RentalProducts, { allowNull: false });
	};
	return Rentals;
};
