import React from 'react'
import { Me } from '../../utils/utils'
import { isAdmin } from '../../utils/admin-utils'
import ProfileNavLink from '../others/profile-navlink'
import PropTypes from 'prop-types'

const GroupNav = ({ url, admin }) => (
  <div className="pro_nav user_nav">
    <ul>
      <ProfileNavLink url={url} label="Annonces" />
      <ProfileNavLink url={`${url}/members`} label="Membres" />

      {(Me(admin) || isAdmin()) && (
        <ProfileNavLink url={`${url}/edit`} label="Editer" />
      )}
      {Me(admin) && (
        <ProfileNavLink url={`${url}/add-members`} label="Ajouter membres" />
      )}
      <ProfileNavLink url={`${url}/about`} label="Infos" />
    </ul>
  </div>
)

GroupNav.propTypes = {
  url: PropTypes.string.isRequired,
  admin: PropTypes.number,
}

export default GroupNav
