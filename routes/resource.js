var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ink_controller = require('../controllers/ink');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// ink ROUTES ///
// POST request for creating a ink.
router.post('/resource/inks', ink_controller.ink_create_post);
// DELETE request to delete ink.
router.delete('/resource/inks/:id', ink_controller.ink_delete);
// PUT request to update ink.
router.put('/resource/inks/:id', ink_controller.ink_update_put);
// GET request for one ink.
router.get('/resource/inks/:id', ink_controller.ink_detail);
// GET request for list of all ink items.
router.get('/resource/inks', ink_controller.ink_list);
module.exports = router;