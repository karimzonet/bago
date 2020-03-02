import React, { Fragment } from 'react'
import { humanReadable } from '../../../../utils/utils'
import PropTypes from 'prop-types'
import AppLink from '../../link/link'

const UserSearch = props => {
  let {
    id,
    username,
    firstname,
    surname,
    post_id,
    departureDate,
    arrivalDate,
    departure,
    arrival,
    kilo,
    prixUnit,
    mutualFollowersCount,
    prixTotal,
    clicked,
  } = props

  return (
    <div className="s_d_peo">
      <AppLink className="s_d_p" url={`/post/${post_id}`}>
      <Fragment>
        <img src={`/users/${id}/avatar.jpg`} />
        <div class="product-listing-m gray-bg">
                <div class="product-listing-img"><img src="/images/travel.png" class="img-responsive" alt="Image"/>
                </div>
                <div class="product-listing-content">
                  <h5> <i class="fa fa-plane" aria-hidden="true"></i> <font color="#120D41" size="2">  <b>{departure}</b> </font></h5>
                  <h5> <i class="fa fa-plane fa-flip-vertical" aria-hidden="true"></i> <font color="#120D41" size="2">  <b>{arrival}</b> </font></h5>
                  <ul>
                    <li><i class="fa fa-calendar" aria-hidden="true"></i>{departureDate}</li>
                    <li><i class="fa fa-credit-card" aria-hidden="true"></i> <font color="#ca1e26" size="2">  <b>{prixUnit} €/Kg</b> </font></li>
                    <li><i class="fa fa-suitcase" aria-hidden="true"></i><font color="#ca1e26" size="2">  <b>{kilo} Kg</b> </font></li>
                    <li><i class="fa fa-money" aria-hidden="true"></i><font color="#564DAA" size="4" fontFamily="Georgia">  <b>{prixTotal} €</b> </font></li>
                  </ul>
                  <a href="#" class="btn" onClick={clicked}> Voir Details <span class="angle_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span></a>
                </div>
              </div>
      </Fragment>
      </AppLink>
    </div>
  )
}

UserSearch.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  post_id: PropTypes.number.isRequired,
  departureDate: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  kilo: PropTypes.number.isRequired,
  prixUnit: PropTypes.number.isRequired,
  prixTotal: PropTypes.number.isRequired,
  mutualFollowersCount: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
}

export default UserSearch
