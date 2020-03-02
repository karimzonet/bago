import React, { Component } from 'react'
import { post } from 'axios'
import MapSearch from './map-search/map-search'
import FAIcon from '../icons/font-awesome-icon'
import PrimaryButton from '../../others/button/primary-btn'
export default class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(),
          message: {
                    departure: '',
                    arrival: ''
      },
          search: {
            users: []
          },
        };
    }
  handleChangeSearch = (event) => {
    const name = event.target.getAttribute('name');
    this.setState({
        message: { ...this.state.message, [name]: event.target.value }
      });
    }
  search = async () => {
    var dateDeparture=document.getElementById("dateDeparture").value;
    var getFullYear=dateDeparture.substring(0, 4);
    var getMonth=dateDeparture.substring(5, 7);
    var getDate=dateDeparture.substring(8, 10);
    let formatted_date = getDate + "/" + getMonth + "/" + getFullYear;
    let body = {...this.state.message, startDate:formatted_date};
    let { data } = await post('/api/search-bago', body);
    this.setState({ search: data })
  }
  hide = () => {
    this.setState({
      search: {
        users: []
      },
    });
  }
  clicked = () => {
    this.setState({ message: {
                  departure: '',
                  arrival: ''
    } })
    this.hide()
  }
  render() {
    let {
      message:{departure,arrival},
      search: { users},
    } = this.state
    return (
      <div class="s002">
      <div>
      <form>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </div>
            <input id="departure" name="departure" type="text" placeholder="Départ" onChange={this.handleChangeSearch} />
          </div>

          <div class="input-field first-wrap">
            <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </div>
            <input id="arrival" name="arrival" type="text" placeholder="Arrivée" onChange={this.handleChangeSearch}/>
          </div>
          <div class="input-field second-wrap">
            <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
              </svg>
            </div>
            <input class="datepicker" id="dateDeparture" name="dateDeparture" type="text"  />
          </div>
          <div class="input-field fifth-wrap">
            <button class="btn-search" type="button" onClick={this.search}>RECHERCHER</button>
          </div>
        </div>
      </form>
</div>
{users.length > 0  ? (
  <MapSearch
    users={users}
    clicked={this.clicked}
  />
) : null}



    </div>


    )
  }
}
