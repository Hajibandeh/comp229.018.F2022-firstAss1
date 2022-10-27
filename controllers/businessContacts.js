// create a reference to the model
let businessContacts = require('../models/businessContacts');

module.exports.businessContactsList = function(req, res, next) {  
    businessContacts.find((err, businessContactsList) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessContacts/list', {
                title: 'businessContacts List', 
                businessContactsList: businessContactsList
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    businessContacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businessContacts/add_edit', {
                title: 'Edit item', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = businessContacts({
        _id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact : req.body.contact
                   });

    // console.log(updatedItem);

    businessContacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businessContacts/list');
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    businessContacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businessContacts/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = businessContacts();

    res.render('businessContacts/add_edit', {
        title: 'Add a new businessContacts',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = businessContacts({
        _id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact: req.body.contact
            });

    businessContacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.log(item);
            res.redirect('/businessContacts/list');
        }
    });
}