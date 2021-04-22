import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../Helpers/routes';

import Products from '../Views/Products';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <Routes />
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
        <Products />
      </Router>
    </div>
  );
};

export default App;
