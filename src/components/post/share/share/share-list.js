import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { share, unshare } from '../../../../utils/post-utils'
import ModalItemInfo from '../../../others/modal/modal-item-info'
import SecondaryButton from '../../../others/button/secondary-btn'
import PrimaryButton from '../../../others/button/primary-btn'

export default class ShareList extends Component {
  state = {
    didIShare: false,
  }

  componentDidMount = () => this.setState({ didIShare: this.props.didIShare })

  componentWillReceiveProps = ({ didIShare }) => {
    this.props.didIShare != didIShare ? this.setState({ didIShare }) : null
  }

  share = async e => {
    e.preventDefault()
    let { id, post, incrementShares, postOwner } = this.props
    share({
      user: id,
      post_id: post,
      postOwner,
      done: () => {
        incrementShares()
        this.setState({ didIShare: true })
      },
    })
  }

  unshare = async e => {
    e.preventDefault()
    let { id, post: post_id, decrementShares } = this.props
    unshare({
      user: id,
      post_id,
      done: () => {
        this.setState({ didIShare: false })
        decrementShares()
      },
    })
  }

  render() {
    let { id, username, firstname, surname } = this.props
    let { didIShare } = this.state

    return (
      <div className="modal_items">
        <div className="modal_it_img">
          <img src={`/users/${id}/avatar.jpg`} />
        </div>

        <div className="modal_it_content ">
          <ModalItemInfo info={{ username, firstname, surname }} />

          <div className="modal_ff">
            {didIShare ? (
              <SecondaryButton
                label="Unshare"
                onClick={this.unshare}
                extraClass="share_btn"
              />
            ) : (
              <PrimaryButton
                label="Share"
                onClick={this.share}
                extraClass="share_btn"
              />
            )}
          </div>
        </div>

        <hr />
      </div>
    )
  }
}

ShareList.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  post: PropTypes.number.isRequired,
  postOwner: PropTypes.number.isRequired,
  didIShare: PropTypes.bool.isRequired,
}
