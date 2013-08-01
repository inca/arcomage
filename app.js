var express = require('express')
  , http = require('http')
  , conf = require('./conf');

var app = module.exports = exports = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('smashthestate'));
app.use(express.session());
app.use(app.router);
app.use(require("stylus").middleware(__dirname + "/public"));
app.use(express.static(__dirname + '/public'));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require("./routes");

http.createServer(app)
  .listen(conf.port, function() {
  console.log('Visit ' + conf.origin + " to begin.");
});
