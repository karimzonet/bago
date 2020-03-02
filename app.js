/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */
// Initializes dotenv
require('dotenv').config()

// Require Dependencies
const express = require('express'),
Rest = require('./rest'),
  app = express(),
  {
    env: { PORT, SESSION_SECRET_LETTER, MYSQL_HOST,MYSQL_USER,MYSQL_PASSWORD,MYSQL_DATABASE},
  } = process,
  { rainbow } = require('handy-log'),
  favicon = require('serve-favicon'),
  { join } = require('path'),
  hbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  validator = require('express-validator'),
  session = require('client-sessions'),
  cookieParser = require('cookie-parser')
  mysql = require('mysql')
  pino = require('express-pino-logger')()
// Project Files
const { variables } = require('./config/Middlewares')
const AppRoutes = require('./app-routes')
// View engine
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
  })
)
app.set('view engine', 'hbs')
// Middlewares
app.use(favicon(join(__dirname, '/dist/images/logo.png')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false,}))
//app.use(pino)
var dbConn = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
});
// connect to database
dbConn.connect();
// Retrieve all travels
app.get('/travels', function (req, res) {
    dbConn.query('SELECT * FROM travels', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'travels list.' });
    });
});





// Retrieve travels with id
app.get('/travels/:id', function (req, res) {
    let travel_id = req.params.id;

    if (!travel_id) {
        return res.status(400).send({ error: true,data:[], message: 'Please provide travel_id' });
    }
    dbConn.query('SELECT * FROM travels where bookingNumber=?', travel_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'travel list.' });

    });
});
// Add a new travel
app.post('/travel', function (req, res) {
    let travel = req.body.travel;
    if (!travel) {
        return res.status(400).send({ error:true, message: 'Please provide travel' });
    }
    dbConn.query("INSERT INTO travels SET ? ", { travel: travel }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New travel has been created successfully.' });
    });
});
app.use(validator())
app.use(express.static(join(__dirname, '/dist')))
app.use(
  session({
    cookieName: 'session',
    secret: SESSION_SECRET_LETTER,
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  })
)
app.use(cookieParser())
// Middleware for some local variables to be used in the template
app.use(variables)
// App routes
AppRoutes(app)
// Listening to PORT
app.listen(PORT, () => rainbow('App running..'))
//var rest = new Rest();
//var sendMessageRest = rest.sendMessage()
var rest = new Rest();
//var sendMessageRest = rest.sendMessage();
