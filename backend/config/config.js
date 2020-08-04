const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: '127.0.0.1',
		dialect: 'mysql',
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Products = require('../models/Products.js')(sequelize, Sequelize);
db.Customers = require('../models/Customers.js')(sequelize, Sequelize);

db.Rentals = require('../models/Rentals.js')(sequelize, Sequelize);

db.Sales = require('../models/Sales.js')(sequelize, Sequelize);

//Relations

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

module.exports = db;
