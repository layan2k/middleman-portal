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

router.post('/login', async (req,res)=>{
    let user = await User.findOne({username: req.body.username});
    if(!user) res.status(500).send('Username is incorrect');

    let validPass = await bcrypt.compare(user.password, req.body.password)
    if(!validPass) res.status(500).send('Password is incorrect');

    res.send('logged in');
});

router.get('/user', async (req,res)=> {
    await User.find().then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

router.delete('/delete-user/:user', async (req, res)=> {
    await User.deleteOne({username: req.params.user}).then(result => res.json("Deleted"))
    .catch(err => res.status(500).send(err));
})

module.exports = router;