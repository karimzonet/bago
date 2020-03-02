import React, { Component, Fragment } from 'react'
import SidebarOptions from './options'
import MaterialIcon from '../icons/material-icon'

export default class SidebarBottom extends Component {
  state = {
    showOptions: false,
    today:new Date().getFullYear(),
  }

  toggleOptions = () => this.setState({ showOptions: !this.state.showOptions })

  render() {
    let { showOptions } = this.state

    return (
      <div class="copyright_part_text">
                <div class="row">
                    <div class="col-lg-8">
                        <p class="footer-text m-0">
                        Copyright &copy;{this.state.today} All rights reserved</p>
                    </div>
                    <div class="col-lg-4">
                        <div class="copyright_social_icon text-right">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-behance"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g"></i></a>

                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
