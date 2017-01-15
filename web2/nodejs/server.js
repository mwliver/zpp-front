var conn = require('connect');
var serveStatic = require('serve-static');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
}
conn().use(allowCrossDomain)

conn().use(serveStatic('/PROJEKT_UCZELNIA/plan_web/web2')).listen(1379, function () {
    console.log('localhost:1379');
});