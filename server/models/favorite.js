const db = require("../lib/db");
const mongoose = require("mongoose");

var ObjectId = mongoose.Schema.Types.ObjectId;
const FavoriteSchema = new mongoose.Schema({
    idManga: ObjectId,
    userid: ObjectId
});

const Favorite = mongoose.model("Favorite",FavoriteSchema);

module.exports = db.model('Favorite', FavoriteSchema);