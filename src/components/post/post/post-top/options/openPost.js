import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AppLink from '../../../../others/link/link'
import { Me } from '../../../../../utils/utils'
import { isAdmin } from '../../../../../utils/admin-utils'
const OpenPost = ({ when, post_id,user }) => (
  <Fragment>
    {(Me(user) || isAdmin()) && (
      <li>
        <AppLink url={`/post/${post_id}`} label="Ouvrir" />
      </li>
    )}
  </Fragment>
)

OpenPost.propTypes = {
  when: PropTypes.string.isRequired,
  post_id: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired
}

export default OpenPost
