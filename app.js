const mongoose = require('mongoose');
const colors = require('colors');
const dbName = "demo";

mongoose.connect('mongodb://localhost:27017/'+dbName);

mongoose.connection.on('connection', () => {
    console.log(`Connection to mongoDb ${demo} was successful...`);
});
