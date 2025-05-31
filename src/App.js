import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

// Komponenty główne
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import Lists from './components/Lists/Lists'; // 
import List from './components/List/List'; 

// Strony

import Favorite from './components/pages/Favorite';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          {/* Strona główna — hero + search + linki do list */}
          <Route path="/" element={
            <>
              <Hero />
              <Lists /> {}
            </>
          } />

          {/* Dynamiczny widok listy po kliknięciu */}
          <Route path="/list/:listId" element={<List />} />

          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
