const express = require ("express");
const Manga = require("../models/manga");

const router = express.Router();


router.get('/', (req,res) => {
    console.log(req.query);
    Manga.find(req.query).then(data => res.json(data));
});

module.exports = router;