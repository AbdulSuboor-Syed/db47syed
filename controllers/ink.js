var ink = require('../models/ink');

// List of all ink
exports.ink_list = async function (req, res) {
    try {
        theink = await ink.find();
        res.send(theink);
    }
    catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }
};
// for a specific ink.
exports.ink_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: ink detail: ' + req.params.id);
};
// Handle ink create on POST.
// Handle ink create on POST.
exports.ink_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ink();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {inkcolor: "Black", company: "DIC/Sun Chemical", price: 1.40}
    document.inkcolor = req.body.inkcolor;
    document.company = req.body.company;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};// Handle ink delete form on DELETE.
// Handle ink delete form on DELETE.
exports.ink_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: ink delete DELETE ' + req.params.id);
};
// Handle ink update form on PUT.
exports.ink_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: ink update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.ink_view_all_Page = async function (req, res) {
    try {
        theinks = await ink.find();
        console.log("njfndw")
        res.render('inks', { title: 'ink Search Results', results: theinks });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};