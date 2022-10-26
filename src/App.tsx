import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Body/Body';
import Nav from './Components/NavMenu/NavMenu';
import { Footer } from './Components/Footer/Footer';

const App = () => {

  return (
    <div>
      <Header logoTitle='Авто Драйв'/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;