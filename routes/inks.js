var express = require('express');
var router = express.Router();
const ink_controlers= require('../controllers/ink');
/* GET home page. */
router.get('/', ink_controlers.ink_view_all_Page );
module.exports = router;