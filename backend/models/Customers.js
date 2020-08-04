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
