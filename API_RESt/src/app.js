const http = require('http');
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const user = require('./routes/user');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb', extended: true})) ;


app.use (function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
  

});
// routes
// routes

// routesif
// routes

require('./routes/Gasolinera')(app);



// static files

app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app)
  .listen(app.get('port'),'192.168.43.210', (a) => {
    console.log('server on port', app.get('port'));

  });
