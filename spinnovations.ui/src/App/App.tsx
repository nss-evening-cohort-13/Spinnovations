import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../Helpers/routes';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
