var express = require('express');
var router = express.Router();
let businessContactsController = require('../controllers/businessContacts.controller');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}
/*00. GET businessContactss listing. */
router.get('/list', requireAuth,businessContactsController.businessContactsList);

/* GET Route for displaying the Add page - CREATE Operation */
//01. get when we click on the add user show me the page 
router.get('/add',requireAuth, businessContactsController.displayAddPage);

/*02. POST Route for processing the Add page - CREATE Operation */
router.post('/add',requireAuth, businessContactsController.processAddPage);

// 03. Routers for show edit 
router.get('/edit/:id',requireAuth, businessContactsController.displayEditPage);
// 04. Routers for  edit the page
router.post('/edit/:id',requireAuth, businessContactsController.processEditPage);

//05. Route for Delete
router.get('/delete/:id',requireAuth, businessContactsController.performDelete);

module.exports = router;
