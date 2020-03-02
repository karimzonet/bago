import React, { Component } from 'react'
import { connect } from 'react-redux'
import { humanReadable } from '../../../../utils/utils'
import Comments from '../../comment/comments/comments'
import ImageComment from '../../comment/image-comment/imageComment'
import StickerComment from '../../comment/sticker-comment/stickerComment'
import TextComment from '../../comment/text-comment/text-comment'
import { shape, number, string, array } from 'prop-types'
import AppLink from '../../../others/link/link'

class PostBottom extends Component {
  state = {
    user: 0,
  }

  componentDidMount = () =>
    this.setState({
      user: this.props.postDetails.user,
    })

  incrementComments = () =>
    this.setState({
      comments_count: ++this.state.comments_count,
    })

  render() {
    let { user } = this.state
    let {
      postDetails,
      postDetails: { post_id, when, comments},
      session,
    } = this.props

    let childProps = {
      postDetails,
      incrementComments: this.incrementComments,
    }

    return (
      <div>
        <div className="p_cit">
          <div>
            <TextComment {...childProps} />
          </div>
        </div>
        <Comments
          when={when}
          comments={comments}
          user={this.state.user}
        />
      </div>
    )
  }
}
PostBottom.propTypes = {
  postDetails: shape({
    comments_count: number.isRequired,
    post_id: number.isRequired,
    username:string.isRequired,
    when: string.isRequired,
    user: number.isRequired,
    comments: array,
  }).isRequired
}
const mapStateToProps = store => ({
  session: store.User.session.id,
})
export default connect(mapStateToProps)(PostBottom)
export { PostBottom as PurePostBottom }
