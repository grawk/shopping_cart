'use strict';


var kraken = require('kraken.next'),
    express = require('express'),
    db = require('./lib/database'),
    app = express(),
    port = process.env.PORT || 8000;


app.use(kraken({
    "onconfig": function(settings, cb) {
        var dbConfig = settings.get("databaseConfig");
        db.config(dbConfig);
        cb(null, settings);
    }
}));

app.listen(port, function () {
    console.log('Listening on http://127.0.0.1:8000/');
});
