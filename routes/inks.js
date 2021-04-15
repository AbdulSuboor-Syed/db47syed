var express = require('express');
var router = express.Router();
const ink_controlers= require('../controllers/ink');
/* GET home page. */
router.get('/', ink_controlers.ink_view_all_Page );
module.exports = router;
/* GET detail ink page */
router.get('/detail', ink_controlers.ink_view_one_Page);
/* GET create ink page */
router.get('/create', ink_controlers.ink_create_Page);
/* GET create update page */
router.get('/update', ink_controlers.ink_update_Page);
/* GET create ink page */
router.get('/delete', ink_controlers.ink_delete_Page);
