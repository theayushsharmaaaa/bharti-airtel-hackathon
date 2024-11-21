// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Request from './pages/Request';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/request" element={<Request />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
