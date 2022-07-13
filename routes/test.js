const express = require('express')
const mongoose  = require('mongoose')
const router = express.Router()
const Test = require("../model/test")
const Stud = require("../model/prod")


router.post('/', (req, res) => {

    const test = new Test({
        _id: new mongoose.Types.ObjectId(),
        Email: req.body.Email
    });
    const stud = new Stud({
        _id: new mongoose.Types.ObjectId(),
        category: req.body.category,
        type: req.body.type,
        name: req.body.name,
        slug: req.body.slug,
        price: req.body.price,
        image: {
            1: req.body.image.primary,
            2: req.body.image.secondary
        },
        materials: {
            1: {
                name: req.body.materials.material1.name,
                image: req.body.materials.material1.img
            },
            2: {
                name: req.body.materials.material2.name,
                image: req.body.materials.material2.img
            }
        },
        sizing: {
            ring : req.body.sizing.ring,
            necklace : req.body.sizing.necklace,
            bracelet : req.body.sizing.bracelet,
            earring :   req.body.sizing.earring
        },
        desc: {
            bestselling: req.body.desc.bestselling,
            featured: req.body.desc.featured
        },
        style: req.body.style
    })

    test.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    stud.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message: "First Name Creation was successful",
        payload: test, stud
    })


    
})

router.get('/', (req, res) => {

    Test.find().select("Email").exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs)
    })
    .catch((err) =>{
        res.status(500).json({
            error: err
        })
        console.log(err);
    })
    
    Stud.find().select("_id").exec()
    .then(docs1 => {
        console.log(docs1);
        res.status(200).json(docs1)
    })
    .catch((err) =>{
        res.status(500).json({
            error: err
        })
        console.log(err);
    })
})

module.exports = router