import React, { Component } from 'react'
import ToolTip from 'react-tooltip'
import { connect } from 'react-redux'
import { getSuggestedUsers } from '../../../actions/explore'
import SuggestedList from './suggested-list'
import PropTypes from 'prop-types'
import IsLoading from '../isLoading'
import { cLoading } from '../../../utils/utils'
import FAIcon from '../icons/font-awesome-icon'
import AppLink from '../link/link'
import { Player } from 'video-react'
class Suggested extends Component {
  state = {
    loading: true,
  }

  componentDidMount = () => {
    // params: if user is on a profile of eg. noddy, then noddy won't appear on suggestions
    let { dispatch, params } = this.props
    dispatch(getSuggestedUsers(params))
  }

  updateUsers = e => {
    e.preventDefault()
    let { dispatch, params } = this.props
    dispatch(getSuggestedUsers(params))
  }

  componentWillReceiveProps = () => this.setState({ loading: false })

  render() {
    let { loading } = this.state

    return (
      <div>
        <div className="recomm">
          <div className="recomm_top">
            <span>Comment ça marche?</span>

          </div>

          <div
            className="recomm_main"
            style={{ height: loading ? 100 : 'inherit' }}
          >
            <IsLoading loading={loading} />
            <Player
                  playsInline
                  poster="/images/bago-logo.JPG"
                  src="/video/senegal.mp4"
                />

          </div>
        </div>

        <ToolTip />
      </div>
    )
  }
}

Suggested.propTypes = {
  params: PropTypes.string,
  when: PropTypes.oneOf(['profile', 'home']),
}

const mapStateToProps = store => ({
  suggested: store.Explore.suggested,
})

export default connect(mapStateToProps)(Suggested)
