const db = require('./lib/db');
const User = require('./models/user');

const express = require('express');
const mangaRouter = require('./routes/manga');
const userRouter = require('./routes/user');
const securityRouter = require('./routes/security');
const verifyToken = require('./middlewares/security');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyparser.json());
app.use('/', securityRouter);
app.use(verifyToken);
app.use('/manga', mangaRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Listening');
});
