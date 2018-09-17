import React from 'react';
import { hot } from 'react-hot-loader';
import App from './App';

const HotModule = () => <App />;

export default hot(module)(HotModule);
