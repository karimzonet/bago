import React, { Component } from 'react'
import Title from '../others/title'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import Nothing from '../others/nothing'
import End from '../others/end'
import IsLoading from '../others/isLoading'
import { cLoading } from '../../utils/utils'

class About extends Component {
  render() {

    return (
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6"> <img src="/images/travel1.jpg" class="img-responsive" alt="" /> </div>
            <div class="col-xs-12 col-md-6">
              <div class="about-text">
                <h2>A PROPOS</h2>
                <p><b>Bag’O® </b> a été fondée au début de 2017 par un groupe d’hommes d’affaires de divers horizons, sous la tête de keba TOURE, un visionnaire sénégalais bien versé dans les nouvelles technologies. <br/><br/>Avec l’essor d’entreprises comme AirBnB et uber, le partage de l’économie dans le monde entier vaut maintenant des milliards de dollars permettant aux gens de gagner des gains supplémentaires. Comme notre jour à jour est de plus en plus difficile, les voyages ont obtenu les personnes les plus chères à chercher de meilleures offres et de nouvelles façons d’aller.<br/><br/>Dans cet environnement, <b>Bag’O® </b> est né, une plate-forme révolutionnaire qui permet aux gens de faire de l’argent supplémentaire en voyageant.<br/><br/>Avec <b>Bag’O® </b> le voyageur est plus intelligent.<br/><br/>En tenant compte du fait que nous vivons dans un monde interconnecté et solidaire (économiquement, socialement, culturellement)… Nous pensons que Bag’O ® est un cadeau pour tout le monde.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({

})

export default connect(mapStateToProps)(About)
export {About}
