import React from 'react'
import UserSearch from './user-search'
import GroupSearch from './group-search'
import HashtagSearch from './hashtag-search'
import PropTypes from 'prop-types'
import SearchSection from './section'

const MapSearch = ({ users, groups, hashtags, clicked }) => {
  let map_users = users.map(u => (
      <UserSearch key={u.post_id} {...u} clicked={clicked} />
    ))

  return (
    <div className="search_div">
      <SearchSection searchList={map_users} listFor="member" />
    </div>
  )
}

MapSearch.propTypes = {
  users: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired,
}

export default MapSearch
