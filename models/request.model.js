const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const requestSchema = new Schema({
    sender: {type: String, required: true},
    receiver: {type: String, required: true},
    driver: {type: String, required: true},
    origin: {type: String, required: true},
    destination: {type: String, required: true},
    contact: {type: String, required: true},
    price: Number
}, {
    timestamps: true,
});


const Request = mongoose.model('Request', requestSchema);

module.exports = Request;