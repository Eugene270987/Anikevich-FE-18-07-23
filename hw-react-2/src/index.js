import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import contactReducer from "./store/contacts/contactReducer";


const root = ReactDOM.createRoot(document.getElementById('root'));

const reducers = combineReducers({
    contacts: contactReducer,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
