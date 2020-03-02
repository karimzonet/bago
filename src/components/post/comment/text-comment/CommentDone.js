import React, { Component ,Fragment} from 'react'
import compose from 'recompose/compose'
import TextInput from '../../../others/input/text'
import { FadeIn } from 'animate-components'


export class CommentDone extends Component {
  render() {
    return (
      <Fragment>
          <ul class="timeline">

          	<li>
          		<div class="direction-r">
          			<div class="flag-wrapper">
          				<span class="flag">Poids du colis</span>
          				<span class="time-wrapper"><span class="time"><b>{this.props.weight} Kg </b></span></span>
          			</div>
          		</div>
          	</li>
          	<li>
          		<div class="direction-l">
          			<div class="flag-wrapper">
          				<span class="flag">Prix Total</span>
          				<span class="time-wrapper"><span class="time"><b> {this.props.weight*this.props.prixUnit*656} FCFA</b></span></span>
          			</div>
          		</div>
          	</li>
          	<li>
          		<div class="direction-r">
          			<div class="flag-wrapper">
          				<span class="flag">Nom</span>
          				<span class="time-wrapper"><span class="time"><b> {this.props.nameSender}</b></span></span>
          			</div>
          		</div>
          	</li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">Téléphone</span>
                  <span class="time-wrapper"><span class="time"><b> {this.props.phoneSender}</b></span></span>
                </div>
              </div>
            </li>
          </ul>

          </Fragment>
    );
  }
}
export default compose(
)(CommentDone);
