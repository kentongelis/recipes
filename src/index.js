import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import Details from './components/Details';
import Meals from './components/Meals';
import About from './components/About';
import Random from './components/Random';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/' element={<Meals />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/random' element={<Random />} />
      </Route>
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
