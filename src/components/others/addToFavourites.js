import React from 'react'
import { addToFavourites } from '../../utils/user-interact-utils'
import PropTypes from 'prop-types'
import d from '../../utils/API/DOM'
import SecondaryButton from './button/secondary-btn'

const AddToFavourites = ({ user, username }) => {
  let add = e => {
    e.preventDefault()
    addToFavourites(user)
    new d('.af_btn').blur()
  }

  return (
    <div>
      <div className="recomm_teaser">
        <span>Vous voulez ajouter {username} dans votre liste favorie?</span>
        <SecondaryButton label="Ajouter" onClick={add} />
      </div>
    </div>
  )
}

AddToFavourites.propTypes = {
  user: PropTypes.number,
  username: PropTypes.string.isRequired,
}

export default AddToFavourites
