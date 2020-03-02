import React, { Component } from 'react'
import Title from '../others/title'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import Nothing from '../others/nothing'
import End from '../others/end'
import IsLoading from '../others/isLoading'
import { cLoading } from '../../utils/utils'
class Api extends Component {
  render() {

    return (
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6"> <img src="/images/api-fr.png" class="img-responsive" alt="" /> </div>
            <div class="col-xs-12 col-md-6">
              <div class="about-text">
                <h2>SERVICE WEB CORPORATIF DE BAGO</h2>
                <p><b>BCWS </b> (BAGO Corporate Web service) est une API de service Web intégrée qui permet aux Marsands partenaires de BAGO d’avoir une option électronique extrême importante (option de livraison internationale).
                <br/>L’intégration des données avec <b>Bag‘Ô </b>contribue à une plus grande automatisation des ventes et aide les partenaires Marsands à développer leur activité. Avec l’ouverture des Marsés internationaux, les commerçants peuvent augmenter l’efficacité des ventes, réduire les besoins en termes de main-d’œuvre et surtout réduire considérablement le temps de réponse aux clients.
                <br/> <b>BCWS</b> est entièrement gratuit, mais vous devez posséder un compte Marsand éligible et vous inscrire auprès de <b>BCWS</b> pour utiliser l’API de livraison de packages <b>BCWS</b>.
                </p>
                <h3>AVANTAGES FOURNIS PAR BCWS</h3>
                <p>
                BCWS vous permet de développer des applications pour votre propre compte Merchant-BAGO. Vous pouvez également concevoir des applications pour d’autres commerçants pour les aider à gérer leur activité en ligne. Avec BCWS, vous pouvez créer des applications qui peuvent ouvrir de nouveaux Marsés, télécharger des commandes pour traiter, confirmer les envois et planifier (expédition et réception) des colis. Ces opérations d’API sont accessibles à partir d’une interface de service Web.

                </p>
                       <div class="list-style">
                         <div class="col-lg-6 col-sm-6 col-xs-12">
                           <ul>
                          <b>BCWS offre les fonctionnalités suivantes:</b>
                             <li>Gestion des destinations: ajoutez des destinations, vérifiez l’état du vol par route et la franchise de bagages disponible, évaluez les informations de tarification par destination.</li>
                             <li>Gestion des ordres de livraison: Téléchargez les informations de commande d’expédition, obtenez les données de paiement, acceptez les commandes et programmez les rapports.</li>
                             <li>Gestion des rapports: vous pouvez demander divers rapports, afficher l’état de ces rapports de livraison et les télécharger.</li>
                             <li>Gestion des rapports: vous pouvez demander divers rapports, afficher l’état de ces rapports de livraison et les télécharger.</li>
                           </ul>
                         </div>
                         <div class="col-lg-6 col-sm-6 col-xs-12">
                           <ul>
                           <b>Pour les Marsands Bag’Ô, BCWS vous permet également de:</b>
                             <li>Produisez des envois internationaux entrants et sortants: vous pouvez automatiser le processus de création d’étiquettes pour les unités que vous expédiez dans le monde entier.</li>
                             <li>Vérifiez l’état des envois entrants et sortants: Vérifiez si votre envoi est arrivé avec un avis.</li>
                             <li>Soumettre les demandes de traitement: en intégrant votre système à BCWS, vous donnez à vos clients la possibilité de soumettre des commandes client multi-sites à tout moment. Aucune latence lorsque vous traitez ou planifiez des commandes.</li>
                             <li>Suivi et gestion des demandes d’envois sortants: une fois que les commandes quittent leur lieu d’origine, vos clients et vous avez la possibilité d’être informés des délais de livraison.</li>
                             <li>SERVICE de livraison à domicile international</li>
                           </ul>
                         </div>
                       </div>
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

export default connect(mapStateToProps)(Api)
export {Api}
