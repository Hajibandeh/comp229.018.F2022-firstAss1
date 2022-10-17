let passport = require('passport');

// defining the user model
let User = require('../models/users');

// GET login request
router.get('/login', (req, res, next) => {
    // check to see if the user is not already logged in
    if (!req.user) {
        // render the login page
        res.render('users/login', {
            title: "Login",
            businessContacts: {},
            messages: req.flash('loginErrorMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
        return;
    } else {
        return res.redirect('/businessContacts');
    }
});

// POST login request
router.post('/login', passport.authenticate('local', {
    successRedirect: '/businessContacts',
    failureRedirect: '/login',
    failureFlash: {type: 'loginErrorMessage', message: 'Invalid username or password.'}
}));

// GET register request
router.get('/register', (req, res, next) => {
    // check to see if the user is not already logged in
    if (!req.user) {
        // render the registration page
        res.render('users/register', {
            title: "Register",
            businessContacts: {},
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
        return;
    } else {
        return res.redirect('/businessContacts');
    }
});

// POST register request
router.post('/register', (req, res, next) => {
    User.register(
        new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            displayName: req.body.displayName
        }),
        req.body.password,
        (err) => {
            if (err) {
                console.log('Error inserting new user');
                if (err.name == "UserExistsError") {
                    req.flash('registerMessage', 'Registration Error: User Already Exists');
                }
                return res.render('users/register', {
                    title: "Register",
                    messages: req.flash('registerMessage'),
                    displayName: req.user ? req.user.displayName : ''
                });
            }
            // if registration is successful
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/businessContacts');
            });
        });
});

// GET logout request
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
