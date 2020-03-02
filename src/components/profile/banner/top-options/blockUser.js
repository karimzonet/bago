import React, { Component, Fragment } from 'react'
import { Me } from '../../../../utils/utils'
import { connect } from 'react-redux'
import Prompt from '../../../others/prompt'
import { block } from '../../../../utils/setting-utils'
import PropTypes from 'prop-types'

class BannerBlockUser extends Component {
  state = {
    blockUser: false,
  }

  toggleBlockUser = e => {
    e ? e.preventDefault() : null
    this.setState({ blockUser: !this.state.blockUser })
  }

  blockUser = async e => {
    let {
      ud: { id },
      toggleOptions,
    } = this.props
    e.preventDefault()
    toggleOptions()
    block(id)
    this.toggleBlockUser(null)
  }

  render() {
    let {
      ud: { id, username },
    } = this.props
    let { blockUser } = this.state

    return (
      <Fragment>
        {!Me(id) && (
          <li>
            <a href="#" className="pro_block" onClick={this.toggleBlockUser}>
              Bloquer
            </a>
          </li>
        )}

        {blockUser && (
          <Prompt
            title={`Bloquer ${username}`}
            content={`${username} ne pourra plus vous envoyer de messages, ni vous recommander ou ajouter dans un groupe.`}
            actionText="Bloquer"
            action={this.blockUser}
            back={this.toggleBlockUser}
          />
        )}
      </Fragment>
    )
  }
}

BannerBlockUser.propTypes = {
  toggleOptions: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  ud: store.User.user_details,
})

export default connect(mapStateToProps)(BannerBlockUser)
export { BannerBlockUser as PureBannerBlockUser }
