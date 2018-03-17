import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contacts from './components/Contacts';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Contacts/>, document.getElementById('root'));
registerServiceWorker();
