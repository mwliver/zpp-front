var conn = require('connect');
var serveStatic = require('serve-static');
conn().use(serveStatic('/PROJEKT_UCZELNIA/plan_web/web2')).listen(1379, function(){
    console.log('localhost:1379');
});