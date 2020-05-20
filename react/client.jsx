// import { React, ReactDOM } from './deps.ts';
import React from 'https://dev.jspm.io/react';
import ReactDOM from 'https://dev.jspm.io/react-dom';
import App from './src/app.jsx';

ReactDOM.hydrate(<App />, document.getElementById('root'));
