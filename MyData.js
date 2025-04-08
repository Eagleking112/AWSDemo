const mongoose = require('mongoose');
const productScheme = new mongoose.Schema(
    {
        name:String,
        firstname:String,
        secondname:String
    },
    { collection: 'MyData' }
);

module.exports = mongoose.model('Mydata',productScheme);