import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import ProductLines from './components/ProductLines';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductLines />
      </main>
      <Footer />
    </div>
  );
}

export default App;
