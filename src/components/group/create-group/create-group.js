import React, { Component } from 'react'
import CreateGroupModal from './cg-modal'
import SecondaryButton from '../../others/button/secondary-btn'

export default class CreateGroup extends Component {
  state = {
    createGroup: false,
  }

  toggleCreateGroup = e => {
    e.preventDefault()
    this.setState({ createGroup: !this.state.createGroup })
  }

  render() {
    let { createGroup } = this.state

    return (
      <div>
        <div className="recomm_teaser">
          <span>
            Créer un goupe public ou privé avec les annonces de vos choix.
          </span>

          <SecondaryButton
            label="Créer un groupe"
            onClick={this.toggleCreateGroup}
          />
        </div>

        {createGroup && <CreateGroupModal back={this.toggleCreateGroup} />}
      </div>
    )
  }
}
