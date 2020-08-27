module.exports = (sequelize, DataTypes) => {
	const Customers = sequelize.define('customers', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},

		email: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		phone: {
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

		stripe_id: {
			type: DataTypes.STRING,
		},
	});

	Customers.associate = function (models) {
		Customers.hasMany(models.Sales);
		Customers.hasMany(models.Rentals);
	};

	return Customers;
};
