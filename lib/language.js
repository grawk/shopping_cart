'use strict';
module.exports = function () {

    return function (req, res, next) {
        console.log("language middleware");
        //Pick up the language cookie.
        var language = (req.cookies) ? req.cookies.language || null : null;

        //Set the locality for this response. The template will pick the appropriate bundle
        if (language) {
            res.locals.context = res.locals.context || {};
            res.locals.context.locality = language;
        }
        next();
    };
};
