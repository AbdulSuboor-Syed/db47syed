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
exports.ink_detail =async function (req, res) {
       console.log("detail"  + req.params.id)
    try {
        result = await ink.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};

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
        console.log(err)        
        res.send(err)
        res.status(500);
    }
};
// Handle ink delete form on DELETE.
exports.ink_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await ink.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle ink update form on PUT.
exports.ink_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await ink.findById( req.params.id)
        // Do updates of properties
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.company) toUpdate.company = req.body.company;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};

// VIEWS
// Handle a show all view
exports.ink_view_all_Page = async function (req, res) {
    try {
        theinks = await ink.find();
        console.log(theinks)
        res.render('inks', { title: 'ink Search Results', results: theinks });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle a show one view with id specified by query
exports.ink_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await ink.findById( req.query.id)
        res.render('inkdetail', 
{ title: 'ink Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a ink.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ink_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('inkcreate', { title: 'ink Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a ink.
// query provides the id
exports.ink_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await ink.findById(req.query.id)
        res.render('inkupdate', { title: 'ink Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.ink_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await ink.findById(req.query.id)
        res.render('inkdelete', { title: 'ink Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
