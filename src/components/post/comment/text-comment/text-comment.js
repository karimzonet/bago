import React, { Component, Fragment } from 'react'
import TextCommentModal from './comment-modal'
import PropTypes from 'prop-types'
import MaterialIcon from '../../../others/icons/material-icon'
export default class TextComment extends Component {
  state = {
    comment: false,
    viewButton:'',
  }
componentDidMount = () => {
    let {
      postDetails: { when}
    } = this.props;

this.setState({ viewButton:when });
  }
  render() {
    let { comment } = this.state;
    let {
      postDetails: { post_id, user, when,kilo ,prixUnit},
      incrementComments,
    } = this.props;
    return (
      <Fragment>
{this.state.viewButton==='viewPost'?
''
: (kilo != 0) && (
<div class="login_btn" > <a href="#" class="btn btn-xs uppercase" data-toggle="modal" data-dismiss="modal" onClick={() => this.setState({ comment: true })} style={{ width:'100px',height:'25px' }}>Choisir</a> </div>
)}
        {comment && (
          <TextCommentModal
            prixUnit={prixUnit}
            kilo={kilo}
            post={post_id}
            postOwner={user}
            back={() => this.setState({ comment: false })}
            incrementComments={incrementComments}
            when={when}
          />
        )}
      </Fragment>
    )
  }
}

TextComment.propTypes = {
  postDetails: PropTypes.shape({
    post_id: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
    when: PropTypes.string.isRequired,
    kilo: PropTypes.number.isRequired,
    prixUnit: PropTypes.number.isRequired,
  }).isRequired,
  incrementComments: PropTypes.func.isRequired,
}
