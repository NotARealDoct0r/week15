import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalComponent from './functional-component';
import Hook from './hook';
import RefactorApp from './Refactor-App';

// rendering the RefactorApp
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RefactorApp />
    // <App />
    // <FunctionalComponent />
    // <Hook />
);

