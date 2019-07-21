import React from 'react';
import ReactDOM from 'react-dom';
import {store, context} from './store/index'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { connect } from 'react-redux';

var root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider> , root );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
