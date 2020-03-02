import React, { Component,Fragment } from 'react'
import compose from 'recompose/compose'
export class Terms extends Component {


  render() {
    const { classes} = this.props;
    return (
      <Fragment>

                              <div class="timeline-content">
                              Termes & Conditions
                              </div>
                              <div style={{ height: '200px', padding: 16, border: '2px solid #ccc', borderRadius: '3px', overflowY: 'scroll' }}>
                                <font color="#000000" size="2">  <b ><i>1. Your agreement</i></b> </font><br/>


                                By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

      PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                                  <br/>  <font color="#000000" size="2">  <b ><i>2. Privacy</i></b> </font><br/>


                                  Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
                                  By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

      PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.

                              </div>

        </Fragment>
    );
  }
}

export default compose(

)(Terms);
