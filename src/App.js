import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

// Komponenty główne
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';

// Strony
import Home from './components/pages/Home';
import Favorite from './components/pages/Favorite';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound'; // Dodany komponent 404

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          {/* Strona główna renderuje Hero, SearchForm i List */}
          <Route path="/" element={
            <>
              <Hero />
              <SearchForm />
              <List />
            </>
          } />

          {/* Pozostałe strony */}
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />

          {/* Obsługa błędnego adresu */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
