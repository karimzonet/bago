import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import TimeAgo from 'handy-timeago'
import AboutSection from './section'

const AboutSections = ({ ud }) => (
  <Fragment>
    <AboutSection label="Pseudo" value={ud.username} />
    <AboutSection label="Nom" value={`${ud.firstname} ${ud.surname}`} />
    <AboutSection label="Email" value={ud.email} />
    <AboutSection label="Bio" value={ud.bio} />
    <AboutSection label="Facebook" value={ud.facebook} isLink />
    <AboutSection label="Téléphone" value={ud.phone} />
    <AboutSection label="Membre depuis" value={`${TimeAgo(ud.joined)}`} />
  </Fragment>
)

const mapStateToProps = state => ({
  ud: state.User.user_details,
})

export default connect(mapStateToProps)(AboutSections)
