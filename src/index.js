// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );



import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);

