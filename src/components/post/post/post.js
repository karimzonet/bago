import React, { Component } from 'react'
import TimeAgo from 'handy-timeago'
import PostTop from './post-top/post-top'
import PropTypes from 'prop-types'
import PostImage from './post-middle/post-image'
import PostActions from './post-actions/post-actions'
import PostBottom from './post-bottom/post-bottom'
import AppLink from '../../others/link/link'
export default class Post extends Component {
  state = {
    description: '',
    bookingNumber:'',
    numberTransaction:'',
    departureDate:'',
    arrivalDate:'',
    firstName:'',
    lastName:'',
    departure:'',
    arrival:'',
    company:'',
    bookingStatus:'',
    terminal:'',
    aerogare:'',
    allowance:'',
    kilo:'',
    prixUnit:'',
    prixTotal:'',
    iban:'',
    accompanied:'',
  }

  componentDidMount = async () =>{
    this.setState({ description: this.props.description });
    this.setState({ bookingNumber: this.props.bookingNumber });
    this.setState({ numberTransaction: this.props.numberTransaction });
    this.setState({ departureDate: this.props.departureDate });
    this.setState({ arrivalDate: this.props.arrivalDate });
    this.setState({ firstName: this.props.firstName });
    this.setState({ lastName: this.props.lastName });
    this.setState({ departure: this.props.departure });
    this.setState({ arrival: this.props.arrival });
    this.setState({ company: this.props.company });
    this.setState({ bookingStatus: this.props.bookingStatus });
    this.setState({ terminal: this.props.terminal });
    this.setState({ aerogare: this.props.aerogare });
    this.setState({ allowance: this.props.allowance });
    this.setState({ kilo: this.props.kilo });
    this.setState({ prixUnit: this.props.prixUnit });
    this.setState({ prixTotal: this.props.prixTotal });
    this.setState({ iban: this.props.iban });
    this.setState({ accompanied: this.props.accompanied });
    }
  render() {
    let { when, share_by_username, share_time,user} = this.props;
    let { description,bookingNumber,numberTransaction,departureDate,arrivalDate,firstName,lastName,departure,arrival,company,bookingStatus,terminal,aerogare,allowance,kilo,prixUnit,prixTotal,iban,accompanied} = this.state;
    return (
      <div className="posts" style={{ marginBottom:30}}>
        {when == 'shared' && (
          <div className="post_share_info">
            by{' '}
            <AppLink
              url={`/profile/${share_by_username}`}
              label={share_by_username}
            />
            <span>{share_time ? TimeAgo(share_time) : null}</span>
          </div>
        )}

        <PostTop
          postDetails={{
            ...this.props,
            description,
            bookingNumber,
            numberTransaction,
            departureDate,
            arrivalDate,
            firstName,
            lastName,
            departure,
            arrival,
            company,
            bookingStatus,
            terminal,
            aerogare,
            allowance,
            kilo,
            prixUnit,
            prixTotal,
            iban,
            accompanied
          }}
          updateDescription={value => this.setState({ description: value })}
          updateBookingNumber={value => this.setState({ bookingNumber: value })}
        />
      <div class="product-listing-m">
        <div class="product-listing-img"><img src="/images/travel.png" class="img-responsive" alt="Image"/>
        </div>
        <div class="product-listing-content">
          <h5> <i class="fa fa-plane" aria-hidden="true"></i> {departure}</h5>
          <i class="fa fa-calendar" aria-hidden="true"></i>{departureDate}
          <h5> <i class="fa fa-plane fa-flip-vertical" aria-hidden="true"></i> {arrival}</h5>
          <i class="fa fa-calendar" aria-hidden="true"></i>{arrivalDate}
          <ul>
            <li><i class="fa fa-credit-card" aria-hidden="true"></i> <font color="#ca1e26" size="2">  <b>{prixUnit} €/Kg</b> </font></li>
            <li><i class="fa fa-suitcase" aria-hidden="true"></i><font color="#ca1e26" size="2">  <b>{kilo} Kg</b> </font></li>
            <li><i class="fa fa-money" aria-hidden="true"></i><font color="#564DAA" size="3">  <b>{prixTotal} €</b> </font></li>
          </ul>
          <PostBottom postDetails={{ ...this.props }} />
        </div>
      </div>
                                                                <PostActions postDetails={{ ...this.props }} />
                                                                </div>
    )
  }
}
Post.propTypes = {
  post_id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['user', 'group']).isRequired,
  group_id: PropTypes.number,
  group_name: PropTypes.string,
  post_time: PropTypes.string.isRequired,
  share_by_username: PropTypes.string,
  share_time: PropTypes.string,
  when: PropTypes.oneOf([
    'feed',
    'viewPost',
    'userPosts',
    'bookmarks',
    'shared',
    'tagged',
    'groupPosts',
    'hashtag',
  ]).isRequired,
  likes_count: PropTypes.number.isRequired,
  shares_count: PropTypes.number.isRequired,
  comments_count: PropTypes.number.isRequired,
  tags_count: PropTypes.number.isRequired,
  comments: PropTypes.array,
}
