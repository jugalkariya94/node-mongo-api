require('dotenv').config();

module.exports = {
	port: process.env.PORT || 8080,
	database_url: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
	env: process.env.ENV || 'development',
};