
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);