import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CRouter from './CRoutes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CRouter />, document.getElementById('root'));
registerServiceWorker();
