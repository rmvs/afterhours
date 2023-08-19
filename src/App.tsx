import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from 'pages/Page';
import { BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter >
      <Page />
    </HashRouter>
  )
}

export default App;
