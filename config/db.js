//import mongoose and config package
const mongoose = require('mongoose');
const  config = require('config');
const db = config.get('mongoURI');

//function to connect to db
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1); //exits with failure
    }
};

module.exports = connectDB;
