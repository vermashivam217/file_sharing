require('dotenv').config();
const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/inshare'
function connectDB() {
    // Database connection
    mongoose.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database connected...');
    }).catch((error) => {
        console.log('Connection failed...', error)
    })
}


module.exports = connectDB;



