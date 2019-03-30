import React, { Component } from 'react';
import { render } from 'react-dom';
import Header  from './Header'
import Hello from './Hello';
import { Route , Switch,BrowserRouter as Router } from 'react-router-dom'
import './style.css';
import Card from './Card'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch,faHeart,faUser,faHome} from '@fortawesome/free-solid-svg-icons';
library.add(faSearch,faUser,faHeart,faHome);
import Profile from './Profile';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Router>
        <Route path='/' component={Header} />
        <Route path='/Profile'  exact component={Profile} />
        <Route path='/' exact component={Card} />
        
       </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
