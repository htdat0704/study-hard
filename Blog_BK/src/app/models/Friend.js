const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Friend = new mongoose.Schema({
    name: { type: String, default: '' },
    gender: { type: String, maxLength: 500 },
    number: { type: Number },
    image: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    }
);

module.exports = mongoose.model('Friend', Friend);
