import { createStore, combineReducers } from 'redux'

import contacts from './store/contacts';

const reducer = combineReducers({
    contacts: contacts
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store