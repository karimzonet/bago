import React, { Component } from 'react'
import Title from '../others/title'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import Nothing from '../others/nothing'
import End from '../others/end'
import IsLoading from '../others/isLoading'
import { cLoading } from '../../utils/utils'
import { post } from 'axios'
import MapSearch from '../others/search/map-search/map-search'
import FAIcon from '../others/icons/font-awesome-icon'
import PrimaryButton from '../others/button/primary-btn'
import Search from '../others/search/search'
class SearchAd extends Component {

  render() {
    return (
      <Search />
    )
  }
}

const mapStateToProps = store => ({

})

export default connect(mapStateToProps)(SearchAd)
export {SearchAd}
