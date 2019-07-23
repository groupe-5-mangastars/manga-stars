const mongoose = require('mongoose'),SALT_WORK_FACTOR = 10;

const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://mongo',{
    user:process.env.MONGODB_USER,
    pass:process.env.MONGODB_PASS,
    dbName:process.env.MONGODB_DBNAME,
    useNewUrlParser: true
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = mongoose.connection;