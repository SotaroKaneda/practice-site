import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './components/About.js';
import Home from './components/Home.js';

function App() {
  return (
    <div>
    <nav>
        <ul id="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <Routes>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Routes>
        </ul>
    </nav>
</div>
  );
}

export default App;
