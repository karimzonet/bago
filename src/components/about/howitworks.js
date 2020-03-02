import React, { Component } from 'react'
import Title from '../others/title'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import Nothing from '../others/nothing'
import End from '../others/end'
import IsLoading from '../others/isLoading'
import { cLoading } from '../../utils/utils'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
class Howitworks extends Component {
  render() {

    return (
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6"> <img src="/images/travel3.jpg" class="img-responsive" alt="" /> </div>
            <div class="col-xs-12 col-md-6">
              <div class="about-text">
                <h2>UN PROCESSUS SIMPLE</h2>
                  <p><b>Bag’O® </b> est une plate-forme en ligne qui relie les voyageurs avec la franchise de bagages inutilisés avec d’autres qui n’ont pas assez ou ont le besoin d’envoyer ou de recevoir des choses dans d’autres pays. Les voyageurs avec une franchise libre ont la possibilité de vendre et d’autres qui en ont besoin, sont permis d’acheter. Tout cela de manière sécurisée et simple.
                  </p>

                <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        ETAPE 1: le voyageur achète son billet
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        <img src="/images/bago1.png" class="img-responsive" alt="" />
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      ETAPE 2: le voyageur peut désormais accéder à la plateforme Bag’O avec un e-code en main
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                    <img src="/images/bago2.png" class="img-responsive" alt="" />
                </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    ETAPE 3: Le voyageur peut maintenant publier sur Bag’O la franchise de bagages dont il dispose
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                    <img src="/images/bago3.png" class="img-responsive" alt="" />
                </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      ETAPE 4: Le poids mis à disposition est maintenant visible sur l’application Bag’O ou sur le site Web
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                    <img src="/images/bago4.png" class="img-responsive" alt="" />
                </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
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

export default connect(mapStateToProps)(Howitworks)
export {Howitworks}
