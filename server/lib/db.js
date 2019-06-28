const mongoose = require('mongoose'),SALT_WORK_FACTOR = 10;

const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://mongo',{
    user:process.env.MONGODB_USER,
    pass:process.env.MONGODB_PASS,
    dbName:process.env.MONGODB_DBNAME,
    useNewUrlParser: true
});

const db = mongoose.connection;

module.exports = mongoose.connection;