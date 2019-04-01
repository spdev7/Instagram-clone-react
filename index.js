import React, { Component } from "react";
import { render } from 'react-dom';
import "./style.scss";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Card from "./Card/Card";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="h11">
            <Link className="link1" to="/">
              <i class="fab fa-instagram" />
            </Link>
            <Link className="link1" to="/Search">
              <i class="fas fa-search" />
            </Link>
            <Link className="link1" to="/Liked">
              <i class="far fa-heart" />
            </Link>
            <Link className="link1" to="/profile">
              <i class="far fa-user" />
            </Link>
          </header>

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Card} />
        </div>
      </Router>
    );
  }
}



render(<App />, document.getElementById('root'));
