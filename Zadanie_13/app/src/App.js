import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Route exact path="/" component={{ContactList}}/>
      </React.Fragment>
    );
  }
}

export default App;
