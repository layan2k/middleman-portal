const router = require('express').Router();
let Request = require('../models/request.model');

router.get("/", async (req,res)=>{
    await Request.find()
    .then(requests=> res.json(requests))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.post("/add", async (req,res)=> {

    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const driver = req.body.driver;
    const origin = req.body.origin;
    const destination = req.body.destination;
    const contact = req.body.contact;
    const price = Number(req.body.price);

    const newRequest = new Request({
        sender,
        receiver,
        driver,
        origin,
        destination,
        contact,
        price
    });

    await newRequest.save()
    .then(()=> res.json('request added!'))
    .catch((err)=> res.status(400).json('Error: '+ err));
});

module.exports = router;