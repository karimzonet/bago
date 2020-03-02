import React, { Component ,Fragment} from 'react'
import compose from 'recompose/compose'
import TextInput from '../../../others/input/text'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import { number, func, string } from 'prop-types'

@connect()
export default class CommentWeight extends Component {
  constructor(props) {
             super(props);
             this.state = {
               total: '0 €'
             }
         };
         handleChange = () => {
             let { prixUnit} = this.props;
             var prix = Number(prixUnit);
             var kilo= Number(document.getElementById("commentWeight").value);
             var prixTotal = prixUnit*kilo+" €";
             this.setState({ total: prixTotal });
           };
  render() {
    let { kilo,prixUnit} = this.props;

    return (
      <Fragment>
      <div class="form-style-10">
      <h1>Bienvenue!<span>Entrer ici le poids de votre colis.Il ne doit pas excéder le poids annoncé.</span></h1>
      <div class="section">Poids  :*</div>
      <div class="inner-wrap">
      <label>
      <input type="number"  min="1" id="commentWeight" max={kilo} name="commentWeight" onChange={this.handleChange} style={{ width:'140px',height:'30px',marginLeft:'-10px' }}/>
      </label>
      </div>

      <div class="section">Prix Total:*</div>
      <div class="inner-wrap">
      <label>
      <input type="text" id="commentWeightPrice" name="commentWeightPrice" value={this.state.total} disabled style={{ width:'140px',height:'30px',marginLeft:'-10px' }}/>
      </label>
      </div>





      </div>

      </Fragment>
    )
  }
}
CommentWeight.propTypes = {
  kilo: number.isRequired,
  prixUnit:number.isRequired
}
