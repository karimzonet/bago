import React from 'react'
import PostTopDetails from './top-details'
import PostOptions from './options/options'
import PropTypes from 'prop-types'
import { Me} from '../../../../utils/utils'
const PostTop = ({ postDetails, updateDescription }) => {
  let {
    user
  } = postDetails

return (
  <div>
    <div className="p_i">
      <PostTopDetails details={{ ...postDetails }} />
      {Me(user) ?
        <PostOptions
          postDetails={{ ...postDetails }}
          updateDescription={updateDescription}
        />
       : ''
}
    </div>
  </div>
)
}
PostTop.propTypes = {
  postDetails: PropTypes.shape({
    post_id: PropTypes.number.isRequired,
    group_id: PropTypes.number,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    when: PropTypes.string.isRequired,
    post_time: PropTypes.string.isRequired,
    group_name: PropTypes.string,
    description: PropTypes.string.isRequired,
    user: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
  updateDescription: PropTypes.func.isRequired,
}

export default PostTop
