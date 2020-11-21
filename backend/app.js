require('dotenv').config();
const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Database
const db = require('./config/config');

//Test
db.sequelize
	.authenticate()
	.then(() => console.log('Database connected...'.blue))
	.catch((err) => console.log(`error: ${err}`.bgRed));

/*
 * to wipe and reset set mysql
 */
// db.sequelize.sync({ force: true }).then(() => {
// 	console.log('Drop and re-sync db.');
// });

const app = express();

// middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

// routes folder
const routes = require('./routes');
app.use(routes);

// Set up our port to be either the host's designated port, or 8282
var PORT = process.env.PORT || 8282;

// listen
app.listen(PORT, () => console.log(`LISTENING AT PORT ${PORT}`.magenta));
