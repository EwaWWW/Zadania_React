import React, { Component } from 'react';
import {Router} from 'react-router-dom';

import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router exact path="/" component={{ContactList}}/>
      </React.Fragment>
    );
  }
}

export default App;
