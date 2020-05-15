import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import * as serviceWorker from './serviceWorker';

import first from './store/reducers/first';
import second from './store/reducers/second';
import third from './store/reducers/third';
import fourth from './store/reducers/fourth';

const root = combineReducers({
	first,
	second,
	third,
	fourth
});

const store = createStore(root, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
	, document.getElementById('root')
);

serviceWorker.unregister();
