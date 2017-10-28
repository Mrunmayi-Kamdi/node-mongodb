const mongoose = require('mongoose');
const colors = require('colors');
const dbName = "video";

mongoose.connect('mongodb://shantanu:password@ds227565.mlab.com:27565/facebook'+dbName);

mongoose.connection.on('connection', () => {
    console.log(`Connection to mongoDb ${demo} was successful...`);
});
