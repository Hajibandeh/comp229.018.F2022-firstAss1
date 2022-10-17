// create a reference to the model
let users = require('../models/users.model');
 
////00.show me the contact list


////01. Here we 1. from router we call the add and then this show us the add page 
module.exports.displayAddPage = (req, res, next) => {
    let newItem = users();

    res.render('users/register', {
        title: 'Registration',
        item: newItem
    })          
}

///02.add 

module.exports.processAddPage = (req, res, next) => {
    let newItem = users({
        _id: req.body.id,
        username: req.body.username,
        pass: req.body.pass,
        name: req.body.name,
        email: req.body.email
        
            });
    

}


