import React, { Fragment } from 'react'
import { bool } from 'prop-types'
import AppLink from '../others/link/link'

const GroupInstruction = ({ showBtns }) => (
  <div className="sabout_one">
    <img src="/images/tree.png" />
    <div className="sabout_one_info">
      <span>Editer ou mettre à jour le groupe afin de le rendre plus attractif</span>
      {showBtns && (
        <Fragment>
          <AppLink url="/" className="sec_btn" label="Mettre à jour" />
          <AppLink url="/edit-profile" className="pri_btn" label="Editer" />
        </Fragment>
      )}
    </div>
  </div>
)

GroupInstruction.defaultProps = {
  showBtns: true,
}

GroupInstruction.propTypes = {
  showBtns: bool,
}

export default GroupInstruction
