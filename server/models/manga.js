const db = require("../lib/db");
const mongoose = require("mongoose");

const MangaSchema = new mongoose.Schema({
    title: String,
    category: {
        type: String,
        enum:[]
    },
    img: String
});

const Manga = mongoose.model("Manga",MangaSchema);

module.exports = db.model('Manga', MangaSchema);