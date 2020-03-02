// ALL ROUTES OF A NOT LOGGEDIN USER IS HANDLED BY THIS FILE.
// ALSO THE PAGE IS RESPONSIBLE FOR RENDERING REACT FOR A LOGGEDIN USER.

const app = require('express').Router(),
  mw = require('../config/Middlewares')

// WELCOME ROUTE
app.get('/welcome', mw.NotLoggedIn, (req, res) => {
  let options = { title: 'Welcome' }
  res.render('welcome', { options })
})


app.get('/apropos', mw.NotLoggedIn, (req, res) => {
  let options = { title: 'A Propos' }
  res.render('apropos', { options })
})

app.get('/comment', mw.NotLoggedIn, (req, res) => {
  let options = { title: 'Comment ça marche' }
  res.render('comment', { options })
})


app.get('/apibago', mw.NotLoggedIn, (req, res) => {
  let options = { title: 'API' }
  res.render('apibago', { options })
})
// 404 ROUTE
app.get('/404', mw.LoggedIn, (req, res) => {
  let options = { title: 'Oops!! Error' }
  res.render('404', { options })
})

// HELP ROUTE




// ROUTE FOR LOGGED IN USER [REACT IS RENDERED BY THIS ROUTE]
app.get('*', mw.LoggedIn, (req, res) => {
  let options = { title: '📸' }
  res.render('app', { options })
})

module.exports = app
