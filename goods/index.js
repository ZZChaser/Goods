
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import List from './containers/List'
import GoodsDetail from './components/GoodsDetail';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' components={List}/>
            <Route path='/detail/:id' components={GoodsDetail}/>
        </Router>
    </Provider>,
    document.getElementById("content")
);