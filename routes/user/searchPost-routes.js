// ALL THE USER SIGNUP-RELATED ROUTES ARE HANDLED BY THIS FILE

const app = require('express').Router(),
  db = require('../../config/db'),
  dir = process.cwd(),
  mail = require('../../config/Mail'),
  User = require('../../config/User'),
  fs = require('fs'),
  { promisify } = require('util'),
  { success } = require('handy-log'),
  mw = require('../../config/Middlewares')

// USER SIGNUP GET ROUTE


module.exports = app
