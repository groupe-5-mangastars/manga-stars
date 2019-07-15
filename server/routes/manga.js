const express = require('express');
const Manga = require('../models/manga');
const router = express.Router();

router.get('/', (req, res) => {
    Manga.find().then(data => res.json(data));
});

router.get('/:id', (req, res) => {
    console.log('MANGA BY ID : ',req.params.id);
    Manga.findOne({ imdbID: req.params.id}).then(data => res.json(data));
});

router.post('/', (req, res) => {
    const manga = new Manga(req.body);
    manga.save()
    .then(data => res.status(201).json(data))
    .catch(
        error => {
            if(error.name === "ValidationError") {
                res.status(400).json(error.errors);
            } else {
                res.sendStatus(500);
            }
        }
    )
});

module.exports = router;