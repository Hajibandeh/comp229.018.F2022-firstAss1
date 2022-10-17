// create a reference to the model
let businessContacts = require('../models/businessContacts.model');
 
////00.show me the contact list
exports.businessContactsList = function(req, res, next) {  
    
    businessContacts.find((err, businessContactsList) => {
        console.log(businessContactsList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessContacts/list', {
                title: 'businessContacts List', 
                ListContact: businessContactsList
            })            
        }
    });
}

////01. Here we 1. from router we call the add and then this show us the add page 
module.exports.displayAddPage = (req, res, next) => {
    let newItem = businessContacts();

    res.render('businessContacts/add_edit', {
        title: 'Add a new businessContacts',
        item: newItem
    })          
}

///02.add 

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
            // refresh the book list
            console.log(item);
            res.redirect('/businessContacts/list');
        }
    });

}

//03. Display Edite Page here and call page by id
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
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}

//04.edit the page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = businessContacts({
        _id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact:req.body.contact
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
            // refresh the book list
            res.redirect('/businessContacts/list');
        }
    });
}