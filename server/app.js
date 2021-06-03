// MongoDB
const mongoose = require('mongoose');

// Cors
const cors = require('cors');

// DotEnv
require('dotenv').config();
const uri = process.env.ATLAS_URI;

// Express
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongoose connection
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB databse connection established!");
});

const requestRouter = require('./routes/request');
const userRouter = require('./routes/auth');

app.use('/api/request', requestRouter);
app.use('/api/auth',userRouter);

app.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server is running on port: ${port}`)
});




