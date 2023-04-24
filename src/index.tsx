import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from 'styles/globalStyle';
import { configureStore } from '@reduxjs/toolkit';
import { slice } from 'useStore';
import { Provider } from 'react-redux';

const store = configureStore({reducer: slice.reducer});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>
);

reportWebVitals();
