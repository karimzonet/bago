// OTHER API ROUTES ARE HANDLED BY THIS FILE

const app = require('express').Router(),
  db = require('../../config/db'),
  User = require('../../config/User'),
  Group = require('../../config/Group')

// FOR CHECKING IF IT'S A VALID USER [REQ = USERNAME]
app.post('/is-user-valid', async (req, res) => {
  let { username } = req.body,
    [{ userCount }] = await db.query(
      'SELECT COUNT(id) AS userCount FROM users WHERE username=? LIMIT 1',
      [username]
    )
  res.json(db.tf(userCount))
})

// GETTING USER DETAILS [REQ = USERNAME]
app.post('/get-user-details', async (req, res) => {
  let { username } = req.body,
    id = await User.getId(username),
    details = await db.query(
      'SELECT id, username, firstname, surname, email, bio, joined, email_verified, account_type, instagram, twitter, facebook, github, website, phone, lastOnline FROM users WHERE username=?',
      [username]
    ),
    tags = await db.query('SELECT user, tag FROM tags WHERE user=?', [id])

  res.json({
    details: {
      ...details[0],
      isOnline: (await User.getWhat('isOnline', id)) == 'yes' ? true : false,
    },
    tags,
  })
})

// GETTING MUTUAL USERS [REQ = USERNAME]
app.post('/get-mutual-users', async (req, res) => {
  let { username } = req.body,
    user = await User.getId(username),
    { id } = req.session,
    _mutuals = await User.mutualUsers(id, user),
    mutuals = []

  for (let m of _mutuals) {
    let mutualUsers = await User.mutualUsers(id, m.user)
    mutuals.push({
      ...m,
      mutualUsersCount: mutualUsers.length,
    })
  }

  res.json(mutuals.slice(0, 10))
})

// SEARCH INSTAGRAM [REQ = VALUE]
app.post('/search-bago', async (req, res) => {
  let { id } = req.session,
    departure = req.body.departure == '' ? '' : '%' + (req.body.departure).toUpperCase() + '%',
    arrival = req.body.arrival == '' ? '' : '%' + (req.body.arrival).toUpperCase() + '%',
    startDate = req.body.startDate == '' ? '' : '%' + req.body.startDate + '%',

    _users = await db.query(
      `SELECT users.id, users.username, users.firstname,users.surname,posts.post_id,posts.departureDate,posts.arrivalDate,posts.departure,posts.arrival,posts.kilo,posts.prixUnit,posts.prixTotal FROM users ,posts WHERE users.id=posts.user ${departure == '' ? ' ' : ' AND UPPER(posts.departure) LIKE '  + '\'' + departure + '\'' } ${arrival == '' ? ' ' : ' AND UPPER(posts.arrival) LIKE ' + '\'' + arrival + '\'' } ${startDate == '' ? ' ' : ' AND posts.departureDate LIKE ' + '\'' + startDate + '\'' } ORDER BY post_id DESC`,
      [id]
    ),
    users = [],
    _groups = await db.query(
      `SELECT group_id, name FROM groups WHERE name LIKE '%${req.body.departure}%' ORDER BY group_id DESC LIMIT 7`
    ),
    groups = [],
    hashtags = await db.query(
      `SELECT DISTINCT hashtag FROM hashtags WHERE hashtag LIKE '%${req.body.departure}%' ORDER BY hashtag_time DESC LIMIT 10`
    )
  for (let u of _users) {
    let mutualFollowers = await User.mutualUsers(id, u.id)
    users.push({ ...u, mutualFollowersCount: mutualFollowers.length })
  }

  for (let g of _groups) {
    let [{ membersCount }] = await db.query(
        'SELECT COUNT(grp_member_id) AS membersCount FROM group_members WHERE group_id=?',
        [g.group_id]
      ),
      mutualMembers = await Group.mutualGroupMembers(id, g.group_id)

    groups.push({
      ...g,
      membersCount,
      mutualMembersCount: mutualMembers.length,
    })
  }
  res.json({ users, groups, hashtags })
})



module.exports = app
