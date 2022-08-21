import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { Header } from './components/header'
import HeaderNav from './components/header/HeaderNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
const linksArr = [
  {text: 'Home', path: '/'},
  {text: 'Add card', path: '/add-card'},
  {text: 'Cards', path: '/view-cards'},
  {text: 'Brands', path: '/view-brands'}
]
root.render(
  <React.StrictMode>
    <Router>
      <Header title={"Skaggs cards"}>
        <HeaderNav links={linksArr} />
      </Header>
      <App />
    </Router>
  </React.StrictMode>
);
