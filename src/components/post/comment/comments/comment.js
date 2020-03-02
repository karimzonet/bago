import React, { Component } from 'react'
import TimeAgo from 'handy-timeago'
import { Me } from '../../../../utils/utils'
import { connect } from 'react-redux'
import CommentType from './comment-type'
import CommentOptions from './options/comment-options'
import { getPost } from '../../../../actions/post'
import PropTypes from 'prop-types'
import Prompt from '../../../others/prompt'
import AppLink from '../../../others/link/link'
import classNames from 'classnames'
import Notify from 'handy-notification'
import { post } from 'axios'
@connect()
export default class Comment extends Component {
  state = {
    text: '',
    weight:0,
    sexSender: '',
    nameSender: '',
    adressSender: '',
    phoneSender: '',
    approvalTransac: false,
    prixUnit:0,
  }
  showPrompt = e => {
    e.preventDefault()
    this.setState({ approvalTransac: true })
  }
  componentDidMount = () => {
    this.setState({ text: this.props.text });
    this.setState({ weight: this.props.weight });
    this.setState({ sexSender: this.props.sexSender });
    this.setState({ nameSender: this.props.nameSender });
    this.setState({ adressSender: this.props.adressSender });
    this.setState({ phoneSender: this.props.phoneSender });
    this.setState({ prixUnit: this.props.prixUnit });
  }
  _toggle = what => this.setState({ [what]: !this.state[what] })

  toggleOptions = () => this.setState({ approvalTransac: !this.state.approvalTransac })
  modalBack = () => {
    this.toggleOptions()
    this.setState({ approvalTransac: false })
  }

  render() {
    let {
      comment_id,
      comment_by,
      comment_by_username,
      type,
      commentSrc,
      comment_time,
      user,
      approved,
    } = this.props
    let { text,weight,prixUnit,sexSender,nameSender,adressSender,phoneSender,approvalTransac } = this.state
    return (
      <div>
      <div class="underline"></div>
        <div className={classNames('comments', { my_comment: Me(comment_by) })}>
          <img
            className="comments_avatar"
            src={`/users/${comment_by}/avatar.jpg`}
          />
          <div className="comments_content">
            <AppLink
              url={`/profile/${comment_by_username}`}
              className="comments_user"
              label={comment_by_username}
            />
            <div id="container">
              <div class="icon_wrapper">
              </div>
              <form id="contact_form">
                <div class="name">
                  <label for="name">Adress: </label>
                  <input type="text" value={adressSender} id="input_form"  disabled/>
                </div>
                <div class="name">
                  <label for="name">Phone: </label>
                  <input type="text" value={phoneSender} id="input_form"  disabled/>
                </div>
                <div class="name">
                  <label for="name">Weight: </label>
                  <input type="text" value={weight} id="input_form"  disabled/>
                </div>
                <div class="name">
                  <label for="name">Unit Price: </label>
                  <input type="text" value={prixUnit} id="input_form"  disabled/>
                </div>
                <div class="name">
                  <label for="name">Approval State: </label>

                    { (approved == null) && (
                  <font color="#ca1e26"><i class = "fa fa-spinner  fa-spin"> </i></font>)}

                    {(approved == 'N') && (
                    <font color="#ca1e26"><i class = "fa fa-ban"> Not paid</i></font>)}

                    {(approved == 'X') && (
                      <font color="#ca1e26"><i class =  "fa fa-trash"> To be refunded</i></font>)}

                    {(approved == 'V') && (
                      <font color="#11D50D"><i class =  "fa fa-check"> Approved</i></font>)}
                </div>
          </form>
            </div>
            <div className="comments_bottom">
              <span className="comments_time">{TimeAgo(comment_time)}</span>
            </div>
            <CommentOptions
              commentDetails={{
                comment_id,
                comment_by,
                text,
                type,
                commentSrc,
              }}
              updateCommentText={value => this.setState({ text: value })}
            />
          </div>
        </div>
      </div>
    )
  }
}
Comment.propTypes = {
  comment_id: PropTypes.number.isRequired,
  comment_by: PropTypes.number.isRequired,
  comment_by_username: PropTypes.string.isRequired,
  comment_time: PropTypes.string.isRequired,
  post_id: PropTypes.number.isRequired,
  commentSrc: PropTypes.string,
  text: PropTypes.string,
  weight:PropTypes.number,
  prixUnit:PropTypes.number,
  sexSender:PropTypes.string,
  nameSender:PropTypes.string,
  adressSender:PropTypes.string,
  phoneSender:  PropTypes.string,
  type: PropTypes.oneOf(['text', 'sticker', 'image']).isRequired,
  user: PropTypes.number.isRequired,
  // approved: PropTypes.string.isRequired,
}
