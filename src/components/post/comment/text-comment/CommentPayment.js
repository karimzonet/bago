import React, { Component ,Fragment} from 'react'
import compose from 'recompose/compose'
import TextInput from '../../../others/input/text'
import { FadeIn } from 'animate-components'
import CardReactFormContainer from 'card-react'
export class CommentPayment extends Component {

  render() {
    return (
          <Fragment>
          <CardReactFormContainer
            container="card-wrapper"
                  formInputsNames={
                    {
                      number: 'ccnumber',
                      expiry: 'ccexpiry',
                      cvc: 'cccvc',
                      name: 'ccname'
                    }
                  }

                  initialValues= {
                    {
                      number: '4965258432451023',
                      name: 'ELHADJI ABDOU KARIM KHOULE',
                      cvc: '000',
                      expiry:"12/03"
                    }
                  }
                  classes={
                    {
                      valid: 'valid-input',
                      invalid: 'invalid-input'
                    }
                  }
                  formatting={true}
                  >
                  <div class="form-style-10">
                  <input type="text" id="ccname" name="ccname" placeholder="Name"/>
                  <input type="text" id="ccnumber" name="ccnumber" placeholder="Number"/>
                  <input type="text"  id="ccexpiry" name="ccexpiry" placeholder="MM/YY"/>
                  <input type="text"  id="cccvc" name="cccvc" placeholder="CVC"/>
                  </div>
</CardReactFormContainer>
<div id="card-wrapper"></div>
          </Fragment>
    );
  }
}
export default compose(
)(CommentPayment);
