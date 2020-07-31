const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clean_machines', 'root', '2014_Ohiostate#1', {
	host: 'localhost',
	dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Features = require('../models/Features.js')(sequelize, Sequelize);
db.Products = require('../models/Products.js')(sequelize, Sequelize);

//Relations
// db.Features.belongsTo(db.Products);
// db.Products.hasOne(db.Features);

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
	  db[modelName].associate(db);
	}
  });

module.exports = db;
