import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PrimaryButton from '../button/primary-btn'
import SecondaryButton from '../button/secondary-btn'

const ModalBack = ({ back, btnType, label, disabled }) => {
  let b = e => {
    e ? e.preventDefault() : null
    back()
  }

  let defaults = {
    label,
    onClick: b,
    disabled,
  }

  return (
    <Fragment>
      {btnType == 'primary' ? (
        <PrimaryButton {...defaults} style={{  height:'30px' }}/>
      ) : (
        <SecondaryButton {...defaults} style={{  height:'30px' }} />
      )}
    </Fragment>
  )
}

ModalBack.defaultProps = {
  label: 'Précédent',
  disabled: false,
  btnType: 'primary',
}

ModalBack.propTypes = {
  back: PropTypes.func.isRequired,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
}

export default ModalBack
