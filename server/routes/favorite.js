const express = require ("express");
const Favorite = require("../models/favorite");
const verifyToken = require('../lib/auth').verifyToken;

const router = express.Router();


router.get('/', (req,res) => {
    Favorite.find(req.query).then(data => res.json(data));
});

router.get('/:id',(req,res) => {
    Favorite.find({userid: req.params.id})
        .then(data => res.json(data))
        .catch(error => {
            console.log(error);
            if (error.name == "CastError") {
                res.status(422).json({message: "Invalid id"});
            } else {
                res.sendStatus(500);
            }
        });
});

router.post('/', (req, res) => {
    const favorite = new Favorite(req.body);
            favorite.save()
                .then(data => res.status(201).send(data))
                .catch(error => {
                    if (error.name === 'ValidationError') {
                        res.status(400).json(error.errors);
                    }else {
                        res.sendStatus(500);
                    }
                });



});




module.exports = router;