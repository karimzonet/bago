// ALL THE USER LOGIN-RELATED ROUTES ARE HANDLED BY THIS FILE

const app = require('express').Router(),
  db = require('../../config/db'),
  User = require('../../config/User'),
  mw = require('../../config/Middlewares'),
  { uniqBy } = require('lodash')
// USER LOGIN GET ROUTE
app.get('/login', mw.NotLoggedIn, (req, res) => {
  let options = {
    title: 'S\'authentifier pour continuer',
    users: req.cookies.users ? JSON.parse(req.cookies.users).slice(0, 15) : [],
  }
  res.render('welcome', { options })
})

// LOGS THE USER IN
app.post('/user/login', async (req, res) => {
  try {
    let {
      body: { username: rusername, password: rpassword },
      session,
    } = req

    req.checkBody('username', 'Le champ Nom est vide!!').notEmpty()
    req.checkBody('password', 'Le champ Mot de passe est vide!!').notEmpty()

    let errors = await req.getValidationResult()
    if (!errors.isEmpty()) {
      let array = []
      errors.array().forEach(e => array.push(e.msg))
      res.json({ mssg: array })
    } else {
      let [{ userCount, id, password, email_verified }] = await db.query(
        'SELECT COUNT(id) as userCount, id, password, email_verified from users WHERE username=? LIMIT 1',
        [rusername]
      )

      if (userCount == 0) {
        res.json({ mssg: 'Utilisateur non trouvé !!' })
      } else {
        let same = User.comparePassword(rpassword, password)
        if (!same) {
          res.json({ mssg: 'Mot de passe erroné!!' })
        } else {
          session.id = id
          session.username = rusername
          session.email_verified = email_verified
          session.isadmin = false

          await db.query('UPDATE users SET isOnline=? WHERE id=?', ['yes', id])

          res.json({
            mssg: `Bienvenue ${rusername}!!`,
            success: true,
          })
        }
      }
    }
  } catch (error) {
    db.catchError(error, res)
  }
})

// LOGS USER OUT
app.get('/logout', mw.LoggedIn, async (req, res) => {
  try {
    let { id, username } = req.session,
      user = { id, username },
      oldUsers = req.cookies.users ? JSON.parse(req.cookies.users) : [],
      users = []

    oldUsers.map(o => users.push(o))
    let final = uniqBy([user, ...users], 'id')
    res.cookie('users', `${JSON.stringify(final)}`)

    let u = {
      isOnline: 'no',
      lastOnline: new Date().getTime(),
    }
    await db.query('UPDATE users SET ? WHERE id=?', [u, id])

    let url = req.session.reset() ? '/welcome' : '/'
    res.redirect(url)
  } catch (error) {
    console.log(error)
  }
})


// USER SEARCH GET ROUTE
app.get('/searchPost', mw.NotLoggedIn, (req, res) => {
  let options = {
    title: 'Page de reherche',
    users: req.cookies.users ? JSON.parse(req.cookies.users).slice(0, 15) : [],
  }
  res.render('searchPost', { options })
})

// USER SEARCH POST ROUTE
app.post('/user/searchPost', async (req, res) => {
  try {
    let { departure, arrival, departureDate } = req.body
    departure = departure == '' ? '' : '%' + departure.toUpperCase() + '%'
    arrival = arrival == '' ? '' : '%' + arrival.toUpperCase() + '%'
    departureDate = departureDate == '' ? '' : '%' + departureDate + '%'
    let posts = await db.query(`SELECT users.id, users.username, users.firstname,users.surname,posts.post_id,posts.departureDate,posts.arrivalDate,posts.departure,posts.arrival,posts.kilo,posts.prixUnit,posts.prixTotal FROM users ,posts WHERE users.id=posts.user ${departure == '' ? ' ' : ' AND UPPER(posts.departure) LIKE '  + '\'' + departure + '\'' } ${arrival == '' ? ' ' : ' AND UPPER(posts.arrival) LIKE ' + '\'' + arrival + '\'' } ${departureDate == '' ? ' ' : ' AND posts.departureDate LIKE ' + '\'' + departureDate + '\'' } ORDER BY post_id DESC`)
    res.json({ mssg: 'Recherche terminée', posts: posts, success: true })
  } catch (error) {
    db.catchError(error, res)
  }
})
module.exports = app
