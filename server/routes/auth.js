const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

router.post('/create-user', async (req,res)=>{

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    let newUser = new User({
        username: req.body.username,
        password: hashPass
    });

    await newUser.save()
    .then((res)=>{
        res.send(newUser);
    }).catch(err => res.status(500).send(err));

    
});

router.post('/login', (req,res)=>{


});

module.exports = router;