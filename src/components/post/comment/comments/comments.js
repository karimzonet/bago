import React from 'react'
import Comment from './comment'
import PropTypes from 'prop-types'

const Comments = ({ when, comments, user }) => {
  let map_comments = comments
    ? comments.map(c => (
        <Comment
          key={c.comment_id}
          {...c}
          user={user}
        />
      ))
    : null

  return (
    <div>
      {when == 'viewPost' && <div className="comments_div">{map_comments}</div>}
    </div>
  )
}

Comments.propTypes = {
  when: PropTypes.string.isRequired,
  comments: PropTypes.array,
  user: PropTypes.number.isRequired,
}

export default Comments
