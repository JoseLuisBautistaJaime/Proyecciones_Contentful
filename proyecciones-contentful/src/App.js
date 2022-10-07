
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Components/Routes';


export  const App = () => (
  <Router>
      <div>         
          <Routes />
      </div>
  </Router>
);
