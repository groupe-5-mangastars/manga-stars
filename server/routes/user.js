const express = require('express');
const User = require('../models/user');
const Manga = require('../models/manga')
const router = express.Router();

router.get('/', (req, res) => {
    User.find().then(data => res.json(data));
})

router.get('/info', (req, res) => {
    console.log('info user');
    User.findOne({ email : req.body.id }).then(data => res.json(data));
})


router.post('/', (req, res) => {
    const user = new User(req.body);
    user.save()
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
})
router.get('/favorite/:id',(req,res) => {
    User.findById(req.params.id)
        .populate({
            path: 'mangas',
            populate: { path: '_id', model: 'Manga' }
        })
        .then( data =>  res.json(data.favorite))
        .catch(error => {
            console.log(error);
            if (error.name == "CastError") {
                res.status(422).json({message: "Invalid id"});
            } else {
                res.sendStatus(500);
            }
        });


});

router.put('/favorite/:id', (req, res) => {
    console.log(req.body.favorite);
    User.findByIdAndUpdate( req.params.id, { $push: {favorite: req.body.favorite} })
        .then(data => res.status(201).send(data))
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(400).json(error.errors);
            }else {
                res.sendStatus(error);
                res.sendStatus(500);
            }
        });
});
router.put('/favorite/delete/:id', (req, res) => {
    console.log(req.body.favorite);
    User.findByIdAndUpdate( req.params.id, { $pull: {favorite: req.body.favorite} })
        .then(data => res.status(201).send(data))
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(400).json(error.errors);
            }else {
                res.sendStatus(error);
                res.sendStatus(500);
            }
        });
});


module.exports = router;
