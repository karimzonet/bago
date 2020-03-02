import React, { Component, Fragment } from 'react'
import compose from 'recompose/compose'
export class Generatecode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirming: null,
      total: 0,
      numberTransaction: '',
      firstName: '',
      lastName: '',
      departure: '',
      arrival: '',
      departureDate: '',
      arrivalDate: '',
      company: '',
      bookingStatus: '',
      terminal: '',
      aerogare: '',
      allowance: '',
      accompanied: '',

    }
  }

  // Sending confirmation state to parent
  sendConf = (c) => {
    this.props.getConfirming(c);
  }

  componentDidMount= () => {
    const bookingNumber=localStorage.getItem('bookingNumber');
    fetch('/travels/'+bookingNumber)
      .then(res => res.json())
      .then(value => {
          if ((value.error===true)||(typeof value.data === 'undefined')){
          this.setState({confirming: false});
          localStorage.setItem('codeDisabled', true);
          this.sendConf(false);
        }
        else {
          localStorage.setItem('codeDisabled', false);
          localStorage.setItem('firstName',value.data.firstName);
          localStorage.setItem('lastName', value.data.lastName);
          localStorage.setItem('departure',value.data.departure);
          localStorage.setItem('arrival', value.data.arrival);
          localStorage.setItem('departureDate',value.data.departureDate);
          localStorage.setItem('arrivalDate', value.data.arrivalDate);
          localStorage.setItem('company', value.data.company);
          localStorage.setItem('bookingStatus',value.data.bookingStatus);
          localStorage.setItem('terminal', value.data.terminal);
          localStorage.setItem('aerogare', value.data.aerogare);
          localStorage.setItem('allowance',value.data.allowance);
          localStorage.setItem('accompanied',value.data.accompanied);
          this.setState(
            {
              confirming: true,
              numberTransaction:localStorage.getItem("eCode"),
              firstName:value.data.firstName,
              lastName:value.data.lastName,
              departure:value.data.departure,
              arrival:value.data.arrival,
              departureDate:value.data.departureDate,
              arrivalDate:value.data.arrivalDate,
              company:value.data.company,
              bookingStatus:value.data.bookingStatus,
              terminal:value.data.terminal,
              aerogare:value.data.aerogare,
              allowance:value.data.allowance,
            }
          );
          this.sendConf(true);
        }
      })
  }
  render() {
    if (this.state.confirming) {
    return (
      <Fragment>
        <ul class="timeline">
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">E-Code</span>
              <span class="time-wrapper"><span class="time"><b>{this.state.numberTransaction} </b></span></span>
            </div>
          </div>
        </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Nom</span>
                <span class="time-wrapper"><span class="time"><b>{this.state.lastName} {this.state.firstName} </b></span></span>
              </div>
            </div>
          </li>

          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">Départ</span>
                <span class="time-wrapper"><span class="time"><b>{this.state.departure} - {this.state.departureDate} </b></span></span>
              </div>
            </div>
          </li>
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">Arrivée</span>
                  <span class="time-wrapper"><span class="time"><b>{this.state.arrival} - {this.state.arrivalDate} </b></span></span>
                </div>
              </div>
            </li>
            <li>
                        <div class="direction-l">
                          <div class="flag-wrapper">
                            <span class="flag">Compagnie</span>
                            <span class="time-wrapper"><span class="time"><b>{this.state.company}</b></span></span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="direction-r">
                          <div class="flag-wrapper">
                            <span class="flag">Poids</span>
                            <span class="time-wrapper"><span class="time"><b>{this.state.allowance} Kg </b></span></span>
                          </div>
                        </div>
                      </li>
        </ul>
      </Fragment>);
  }
// When no result is found from request
else if (this.state.confirming === false) {
return (
  <Fragment>
<table>
<tr>
<td align="left">  <font color="#ca1e26" size="7" > <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> </font></td>
<td align="left"><font  size="3" color="#ca1e26"> <b>ERREUR(S)</b> </font></td>
</tr>
<tr>
<td> </td>
<td align="center"><font  size="1"><b>Aucune correspondance trouvée. Veuillez réessayer...</b></font></td>
</tr>
</table>
  </Fragment>);
  }
  // When loading view
  return (
    <Fragment>
      <div class="form-style-10 text-center">
        <font color="#ca1e26" size="10"> <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> </font>
        <font color="#900C3F" size="3"> <b>Veuillez patienter pendant le traitement...</b> </font>
      </div>
    </Fragment>);
}
}
export default compose(
)(Generatecode);
