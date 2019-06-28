const db = require("./lib/db");
const express = require("express");
const MangaRouter = require("./routes/manga");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use('/manga',MangaRouter);



app.listen(3000, () => console.log("Listening"));

// db.once('open', () =>
// {
//     let user = new User({
//         email:"lol@hotmail.fr",
//         password:"salut"
//         });

//     // user.register().then(data => console.log(data)).catch(error => console.log(erreur));
//          User.login(user.email,user.password).then(user => console.log(user)).catch(error => console.log(error));


// });

// db.on('error', (error) => console.log(error));

