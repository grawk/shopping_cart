'use strict';


var SetlanguageModel = require('../models/setLanguage');


module.exports = function (app) {

    //var model = new SetlanguageModel();


    app.get('/setlanguage/:lang', function (req, res) {

        res.cookie('language', req.param('lang'));
        res.redirect('/');

    });
};
