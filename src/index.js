import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// For GitHub Pages
const basename = window.location.hostname.includes('github.io') ? '/GR-Portfolio' : '/';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
