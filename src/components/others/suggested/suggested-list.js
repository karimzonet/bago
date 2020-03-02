import React, { Component } from 'react'
import { humanReadable } from '../../../utils/utils'
import PropTypes from 'prop-types'
import AppLink from '../link/link'

export default class SuggestedList extends Component {
  state = {
    isFollowing: false,
  }

  render() {
    let { isFollowing } = this.state
    let { id, username, firstname, surname, mutualUsersCount } = this.props

    return (
      <div className="recomms">
        <img src={`/users/${id}/avatar.jpg`} alt="" />
        <div className="recomms_cont">
          <AppLink
            url={`/profile/${username}`}
            className="recomms_username"
            label={username}
          />
          <span>
            {mutualUsersCount == 0
              ? `${firstname} ${surname}`
              : humanReadable(mutualUsersCount, 'mutual follower')}
          </span>
        </div>
        <div className="recomms_ff">
          {isFollowing ? (
            ''
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

SuggestedList.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  when: PropTypes.oneOf(['home', 'profile']),
  mutualUsersCount: PropTypes.number.isRequired,
}
