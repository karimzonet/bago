// ALL NOTIFICATION-RELATED ROUTES ARE HANDLED BY THIS FILE

const app = require('express').Router(),
  db = require('../../../config/db'),
  User = require('../../../config/User'),
  sms = require("../sms/index.js")
  //client = require('twilio')('ACa39a4a3d4a7fac962ed074a3f50e4905', '99656f19b91347b407f93ee8840fc0a9')

// NTIFIES THE SPECIFIED USER [REQ = TO, TYPE, POST_ID, GROUP_ID, USER]
app.post('/notify', async (req, res) => {
  let { to, type, post_id, group_id, user } = req.body,
    insert = {
      notify_by: req.session.id,
      notify_to: to,
      type,
      notify_time: new Date().getTime(),
      post_id,
      group_id,
      user,
    }
    let name_by = await db.query('SELECT firstname,surname FROM users WHERE  id=?', [req.session.id])
    let firstname_by=name_by[0].firstname.toUpperCase()
    let surname_by=name_by[0].surname.toUpperCase()
    let name_to = await db.query('SELECT firstname,surname,phone FROM users WHERE  id=?', [to])
    let firstname_to=name_to[0].firstname.toUpperCase()
    let surname_to=name_to[0].surname.toUpperCase()
    let phone_to=name_to[0].phone
    if (type=='comment')
    {
      let sendmessag='Hello '+surname_to+' '+firstname_to+', '+ surname_by+' '+firstname_by+' is interested in your ad N°'+post_id+".\n"
      let signature='BagO®'
      let sendmessage=sendmessag+signature
    //  let sendmessage=sendmessage1.replace(" ","+")
    //  let phonetest=new Array()
      //phonetest.push("+33666743266")
    //  if ( !validE164(phone_to) ) {
      //      throw new Error('number must be E164 format!')
      //  }
      //  else {
        //        clickatell.sendMessageHttp(sendmessage, phonetest, "UJqCnbt4QT6YBQ5twlTVmg==");
        //}
        console.log(sendmessage);
      sms.sendMessageRest(sendmessage, '221778163545');
    }
    await db.query('INSERT INTO notifications SET ?', insert)
    res.json({ mssg: 'Notified!!' })
})

// RETURNS USER'S NOTIFICATIONS
app.post('/get-notifications', async (req, res) => {
  let { id } = req.session,
    notifications = await db.query(
      'SELECT notifications.notify_id, notifications.notify_by, users.username AS notify_by_username, notifications.notify_time, notifications.post_id, notifications.group_id, notifications.type, notifications.user FROM notifications, users WHERE notifications.notify_to=? AND notifications.notify_by = users.id ORDER BY notifications.notify_time DESC',
      [id]
    ),
    array = []

  for (let n of notifications) {
    let isFollowing = await User.isFollowing(id, n.notify_by)
    let user_username =
      n.user != 0 ? await User.getWhat('username', n.user) : ''

    array.push({
      ...n,
      isFollowing,
      user_username,
    })
  }

  res.json(array)
})

// CLEARS ALL THE NOTIFICATIONS
app.post('/clear-notifications', async (req, res) => {
  db.query('DELETE FROM notifications WHERE notify_to=?', [req.session.id])
  res.json('Hello, World!!')
})

// RETURNS THE COUNT OF USER'S UNREAD NOTIFICATIONS
app.post('/get-unread-notifications', async (req, res) => {
  let [{ count }] = await db.query(
    'SELECT COUNT(notify_id) AS count FROM notifications WHERE notify_to=? AND status=?',
    [req.session.id, 'unread']
  )
  res.json(count)
})

// MAKES UNREAD NOTIFICATIONS OF A USER READ
app.post('/read-notifications', async (req, res) => {
  await db.query('UPDATE notifications SET status=? WHERE notify_to=?', [
    'read',
    req.session.id,
  ])
  res.json('Hello, World!!')
})





const validE164=(num)=> {
return /^\+?[1-9]\d{1,14}$/.test(num)
}




module.exports = app
