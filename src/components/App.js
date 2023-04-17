import React from 'react'
import '../styles/App.css';
import {BrowserRouter as Router, Link, Route, Routes,} from 'react-router-dom';
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import Error from "./Error";
function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Shop" element={<Shop/>} />
              <Route path="*" element={<Error/>} />
          </Routes>
      </Router>


  );
}

export default App;
