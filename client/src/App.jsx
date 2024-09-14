import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import News from './components/News';
import Headline from './components/Headline';
import CountryNews from './components/CountryNews';
import Search from './components/Search';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="top-headlines/:category" element={<Headline />} />
            <Route path="/country/:code" element={<CountryNews />} />
            <Route path="/search/:query" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
