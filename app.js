
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , stylus = require('stylus')
  , nib = require('nib');

var app = express();

app.configure('development', function(){
  app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: function(str, path){
      return stylus(str)
        .set('filename', path)
        .set('compress', false)
        .use(nib());
    }
  }));
  app.use(express.errorHandler());
});

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});



app.get('/', routes.intro);
app.get('/discover', routes.whatis);
app.get('/heroes', routes.heroes);
app.get('/whatis', routes.whatis);
app.get('/history', routes.history);
app.get('/timeline', routes.timeline);
app.get('/institutions', routes.institutions);

app.get('/people', routes.people);

app.get('/exploring', routes.exploring);
app.get('/exploring/whatis', routes.exploringWhatIs);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
