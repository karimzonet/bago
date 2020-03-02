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
      <div >
        <Title value="Contacts" />
          <div class="timeline-content" >
            <font color="#000000" size="5" ><b>CONTACT</b></font>
          </div>
          <div style={{ height: '100%', width: 770, padding: 16, border: '2px solid #ccc', borderRadius: '3px', fontSize:"3" }}>
          				<div class="flex-w size1 p-b-47">
          					<div class="txt1 p-r-25">
          						<span class="lnr lnr-map-marker"></span>
          					</div>

          					<div class="flex-col size2">
          						<span class="txt1 p-b-20">
          							Address
          						</span>

          						<span class="txt2">
          						-	102, Bv Gabriel Peri 93110 - Rosny Sous Bois, Paris
          						</span>
                      <span class="txt2">
                      -  Sacré Cœur III, Villa N°9083, Dakar
                      </span>
          					</div>
          				</div>

          				<div class="dis-flex size1 p-b-47">
          					<div class="txt1 p-r-25">
          						<span class="lnr lnr-phone-handset"></span>
          					</div>

          					<div class="flex-col size2">
          						<span class="txt1 p-b-20">
          							Lets Talk
          						</span>

          						<span class="txt3">
          						+33 72-68-08-54-52 (Paris)
          						</span>
                      <span class="txt3">
          						+221 77-816-35-45 (Dakar)
          						</span>
          					</div>
          				</div>

          				<div class="dis-flex size1 p-b-47">
          					<div class="txt1 p-r-25">
          						<span class="lnr lnr-envelope"></span>
          					</div>

          					<div class="flex-col size2">
          						<span class="txt1 p-b-20">
          							General Support
          						</span>

          						<span class="txt3">
          						keba@bagoonline.com
          						</span>
          					</div>
          				</div>






          </div>
        <End />
      </div>
    )
  }
}

const mapStateToProps = store => ({

})

export default connect(mapStateToProps)(Api)
export {Api}
