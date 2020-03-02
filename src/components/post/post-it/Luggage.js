import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
export class Luggage extends Component {
  constructor(props) {
          super(props);
          this.state = {
            total: 0
          }
      }
  handleChange = () => {
      //var prixUnit = Number(document.getElementById("prixUnit").value);
      var kilo= Number(document.getElementById("kilo").value);
      var prixTotal = 8*kilo;
      this.setState({ total: prixTotal });
    };
  render() {
    return (
<Fragment>
    <div class="form-style-10">
    <div class="section">Poids à vendre(Kg)*:</div>
    <div class="inner-wrap">
    <label><input type="number" max={localStorage.getItem('allowance')} min="1" onChange={this.handleChange}  id="kilo" name="kilo" style={{ width:'140px',height:'35px',marginLeft:'-10px' }}/></label>
    </div>

    <div class="section">Prix Total:</div>
    <div class="inner-wrap">
    <label><input type="text" id="prixTotal" value={this.state.total} disabled  style={{ width:'140px',height:'35px',marginLeft:'-10px'}}/></label>
    </div>
    <div class="section">Bagage accompagné :*</div>
    <div class="form-radio-item">
         <input type="radio" name="accompanied" value="Yes" id="Yes" defaultChecked/>
              <label for="Yes"><b>Oui</b></label>
              <input type="radio" name="accompanied" value="No" id="No" />
              <label for="No"><b>Non</b></label>
    </div>
    </div>
</Fragment>
    );
  }
}

export default compose(
)(Luggage);
