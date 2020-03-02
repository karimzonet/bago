import React, { Component ,Fragment} from 'react'
import compose from 'recompose/compose'
import TextInput from '../../others/input/text'
import { FadeIn } from 'animate-components'
export class Reservation extends Component {
  render() {
    return (
          <Fragment>
          <div class="form-style-10">
          <h1>Bienvenue!!! <span> Veuillez entrer votre numéro de réservation.Ce numéro peut être trouvé sur votre billet.</span></h1>
          <div class="section">Numéro de réservation :*</div>
          <div class="inner-wrap">
          <label><input type="text" id="bookingNumber" name="bookingNumber" style={{ width:'140px',height:'35px',marginLeft:'-10px' }}/></label>
          </div>
          </div>
          </Fragment>
    );
  }
}
export default compose(
)(Reservation);
