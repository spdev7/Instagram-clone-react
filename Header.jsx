import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, BrowserRouter as Router } from 'react-router-dom'
export default class Header extends Component {


  render() {
    return (

      <Router>
      <header>
        <Link className="link" to="/">
         <i class="fab fa-instagram"/></Link>
        <Link className="link" to="/Search"><FontAwesomeIcon
          icon="search"
          color="#000"
          size="sm"
        /></Link>

        <Link  className="link"to="/Liked"><FontAwesomeIcon
          icon="heart"
          color="#000"
          size="sm"
        /></Link>
        <Link  className="link" to="/Profile"><FontAwesomeIcon
          icon="user"
          color="#000"
          size="sm"
        /></Link>
        </header>
      </Router >

    )
  }
}