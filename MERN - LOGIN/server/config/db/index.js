const mongo = require('mongoose');

async function connect() {
    try {
        await mongo.connect('mongodb://127.0.0.1:27017/MERN', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection Succes!!!');
    } catch (error) {
        console.log('Connection Failed!!!');
    }
}

module.exports = { connect };
