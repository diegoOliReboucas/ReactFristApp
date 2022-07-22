import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './apis/Footer';
import Header from './apis/Header';
import Money from './apis/Money';
import Pokemon from './apis/Pokemon';
import './App.css';

const App = () => {
  const [pat, setPat] = React.useState('');
  const [background, setBackground] = React.useState('bodyPoke');

  useEffect(() => {
    setInterval(() => {
      setPat(window.location.pathname);
    }, 500);

    if (pat === '/') {
      setBackground('bodyPoke');
    } else if (pat === '/money') {
      setBackground('bodyMoney');
    }
  }, [window.location.pathname]);

  return (
    <div className={`${background}`}>
      <BrowserRouter>
        <Header className="header" />
        <div>
          <Routes>
            <Route path="/" element={<Pokemon titulo="Pokedex" />} />
            <Route path="money" element={<Money titulo="Cotação" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
