import React, { Component ,Fragment} from 'react'
import compose from 'recompose/compose'
import TextInput from '../../../others/input/text'
import { FadeIn } from 'animate-components'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
export class FinalRecipient extends Component {
  constructor(props) {
          super(props);
          this.state = {
            value: ''
          }
      }
  render() {
    return (
          <Fragment>
          <div class="form-style-10">
          <div class="section">Sexe :*</div>
          <div class="inner-wrap">
          <div class="form-radio-item">
               <input type="radio" name="gender" value="male" id="male" defaultChecked/>
                    <label for="male"><b>Masculin</b></label>
                    <input type="radio" name="gender" value="female" id="female" />
                    <label for="female"><b>Féminin</b></label>
          </div>
          </div>
          <div class="section">Prénom & Nom:*</div>
          <div class="inner-wrap">
          <label><input type="text"  id="nomPrenom" name="nomPrenom"  style={{ width:'100%',marginLeft:'-10px' }}/></label>
          </div>
          <div class="section">Adresse :</div>
          <div class="inner-wrap">
          <label><input type="text"  id="adresse" name="adresse" style={{ width:'100%',marginLeft:'-10px' }} /></label>
          </div>
          <div class="section">Téléphone :</div>
          <div>
          <label>
          <PhoneInput
            id="telephone"
            placeholder="Entrer votre numéro"
            value={ this.state.value }
            onChange={ value => this.setState({ value }) } style={{ width:'230px' }}/>
          </label>
          </div>
          </div>

          </Fragment>
    );
  }
}
export default compose(
)(FinalRecipient);
