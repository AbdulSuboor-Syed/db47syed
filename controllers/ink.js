var ink = require('../models/ink');
// List of all inks
exports.ink_list = function(req, res) {
res.send('NOT IMPLEMENTED: ink list');
};
// for a specific ink.
exports.ink_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ink detail: ' + req.params.id);
};
// Handle ink create on POST.
exports.ink_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: ink create POST');
};
// Handle ink delete form on DELETE.
exports.ink_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ink delete DELETE ' + req.params.id);
};
// Handle ink update form on PUT.
exports.ink_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ink update PUT' + req.params.id);
};