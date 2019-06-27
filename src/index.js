import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store'
import {GrobalStyle} from './style.js'
import RouteMap from './components/routeMap'
import {hashHistory} from 'react-router-dom'


const MyApp = (
	<Provider store={store}>
		<App/>
		<GrobalStyle></GrobalStyle>
		<RouteMap history={hashHistory}>

		</RouteMap>
	</Provider>
)

ReactDOM.render(MyApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
