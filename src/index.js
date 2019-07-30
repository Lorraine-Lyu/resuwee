import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/index'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import * as serviceWorker from './serviceWorker';
import Direct from './routes/Direct';

var root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
                    <Direct></Direct>
                </Provider> , root );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
