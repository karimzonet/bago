import { post } from 'axios'
import Notify from 'handy-notification'
import d from './API/DOM'
import { ObjectMssg } from './utils'
import Action from './API/Action'

/**
 * For username checker
 * @param {String} el
 */
export const username_checker = el => {
  let element = new d(el)
  let uc = new d('.username_checker')

  element.on('keyup', async e => {
    let value = e.target.value
    uc.show()

    if (value) {
      let { data: count } = await post('/user/username-checker', { value })
      let html

      if (count == 0) {
        html =
          '<span class="checker_text">username is available</span><span class="checker_icon"><i class="far fa-smile"></i></span>'

        uc.mutipleCSS({
          width: '160px',
          right: '-188px',
        })
      } else {
        html =
          '<span class="checker_text">username already taken</span><span class="checker_icon"><i class="far fa-frown"></i></span>'

        uc.mutipleCSS({
          width: '167px',
          right: '-194px',
        })
      }

      uc.html(html)
    } else {
      uc.hide()
    }
  })

  element.on('blur', () => uc.hide())
}

/**
 * Common function for login & signup
 *
 * @param {Object} options Options
 * @param {Object} options.data
 * @param {String} options.btn
 * @param {String} options.url
 * @param {String} options.redirect
 * @param {String} options.defBtnValue
 */
export const commonLogin = options => {
  let { data, btn, url, redirect, defBtnValue } = options,
    overlay2 = new d('.overlay-2'),
    button = new d(btn),
    action = new Action(btn)

  action.start('Please wait..')

  post(url, data)
    .then(s => {
      let {
        data: { mssg, success },
      } = s

      if (success) {
        Notify({
          value: mssg,
          done: () => (location.href = redirect),
        })

        button.setValue('Redirecting..')
        overlay2.show()
      } else {
        Notify({
          value: ObjectMssg(mssg),
        })

        action.end(defBtnValue)
      }

      button.blur()
    })
    .catch(e => console.log(e))
}
export const commonSearch = options => {
  let { data, btn, url, defBtnValue } = options,
    button = new d(btn),
    action = new Action(btn)

  action.start('Please wait..')

  post(url, data)
    .then(s => {
      let {
        data: { mssg, success, posts },
      } = s
      let posts_view = new d('.col-md-9')
      let html = '<ul class="booking-list">'
      if (success) {
        if (posts.length == 0) {
          // html = `<h3><font color="#ca1e26"><i class="fa fa-exclamation-triangle"> Posts not found !!!</i></font></h3>`
          mssg = 'Aucune annonce trouvée !!!'
        }
        // To be reviewed: must be redirected to login route
        posts.forEach(p => {
          html += `<li>
                            <div class="booking-item-container">
                                <div class="booking-item">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="booking-item-airline-logo">
                                                <img src="/images/travel.png" alt="" title="" />
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="booking-item-flight-details">
                                                <div class="booking-item-departure"><i class="fa fa-plane"></i>
                                                    <h5>${p.departure}</h5>
                                                    <p class="booking-item-date">${p.departureDate}</p>
                                                </div>
                                                <div class="booking-item-arrival"><i class="fa fa-plane fa-flip-vertical"></i>
                                                    <h5>${p.arrival}</h5>
                                                    <p class="booking-item-date">${p.arrivalDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <h5><font color="#564DAA" size="2">  <b>${p.prixUnit} €/Kg</b> </font></h5>
                                            <h5><font color="#564DAA" size="2">  <b>${p.kilo} Kg </b> </font></h5>
                                      </div>
                                        <div class="col-md-3"><span class="booking-item-price">${p.prixTotal}€</span>
                                             <div class="login_btn"> <a href="#loginform" class="btn btn-xs uppercase" data-toggle="modal" data-dismiss="modal">Choisir</a> </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>`
        })

html += '</ul>'
        Notify({
          value: mssg,
          done: () => posts_view.html(html),
        })
      } else {
        Notify({
          value: ObjectMssg(mssg),
        })

        action.end(defBtnValue)
      }

      button.blur()
    })
    .catch(e => console.log(e))
}
