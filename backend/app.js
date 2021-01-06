require('dotenv').config();
const path = require('path');
const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');

// Database
const db = require('./config/config');

//Test
db.sequelize
	.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log(`error: ${err}`));

/*
 * to wipe and reset set mysql
 */
// db.sequelize.sync({ force: true }).then(() => {
// 	console.log('Drop and re-sync db.');
// });

const app = express();

// middleware
//app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.static('client/build'));

// routes folder
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

app.get('*', (req, res) =>
	res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
);

// Set up our port to be either the host's designated port, or 8282
var PORT = process.env.PORT || 8282;

// listen
app.listen(PORT, () => console.log(`LISTENING AT PORT ${PORT}`));
