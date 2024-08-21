// import React, { useEffect } from 'react';
// import StravaAuth from './StravaAuth';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// const App = () => {
//   const query = useQuery();

//   useEffect(() => {
//     const code = query.get('code');
//     if (code) {
//       // Perform the callback function here if needed
//     }
//   }, [query]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<StravaAuth />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StravaAuth from './StravaAuth';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<StravaAuth />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StravaAuth from './StravaAuth';
// import './App.css';  // Import the CSS file

// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<StravaAuth />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StravaAuth from './StravaAuth';
// import './App.css';  // Import the CSS file

// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<StravaAuth />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StravaAuth from './StravaAuth';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<StravaAuth />} />
      </Routes>
    </div>
  );
};

export default App;




