
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import List from './List';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class Root extends Component{
    render = () => {
        return (
            <div>
                <Provider store={store}>
                    <List/>
                </Provider>
            </div>
        )
    }
}
