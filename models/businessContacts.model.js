let mongoose = require('mongoose');

// Create a model class
let businessContactsModel = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email:String ,
        contact: String
            },
    {
        collection: "businessContacts"
    }
);

module.exports = mongoose.model('businessContacts', businessContactsModel);