import React from 'react';
import ReactDOM from 'react-dom';
import App from './decorateAppWithHoutLoader';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
