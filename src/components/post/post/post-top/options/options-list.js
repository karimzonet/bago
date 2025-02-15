import React from 'react'
import PropTypes from 'prop-types'
import RemBookmarkAsAdmin from './remBookmark'
import OpenPost from './openPost'
import EditPostOption from './editPost'
import DeletePostOption from './deletePost'
import CopyLink from '../../../../others/copyLink'

const PostOptionLists = ({ postDetails, toggleOptions, updateDescription }) => {
  let { post_id, user, when, description } = postDetails

  return (
    <div>
      <ul>
        <OpenPost when={when} post_id={post_id} user={user}/>
        <DeletePostOption
          postDetails={{ post_id, user, when }}
          toggleOptions={toggleOptions}
        />
        <RemBookmarkAsAdmin {...postDetails} />
        
      </ul>
    </div>
  )
}

PostOptionLists.propTypes = {
  postDetails: PropTypes.shape({
    post_id: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
    when: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  toggleOptions: PropTypes.func.isRequired,
  updateDescription: PropTypes.func.isRequired,
}

export default PostOptionLists
