var express = require('express');
var router = express.Router();
const ink_controlers= require('../controllers/ink');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET home page. */
router.get('/', ink_controlers.ink_view_all_Page );
module.exports = router;
/* GET detail ink page */
router.get('/detail', ink_controlers.ink_view_one_Page);
/* GET create ink page */
router.get('/create',secured, ink_controlers.ink_create_Page);
/* GET create update page */
router.get('/update',secured, ink_controlers.ink_update_Page);
/* GET create ink page */
router.get('/delete',secured, ink_controlers.ink_delete_Page);
