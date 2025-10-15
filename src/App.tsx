import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [currentPage, setCurrentPage] = useState('home');

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero language={language} />;
      case 'about':
        return <About language={language} />;
      case 'products':
        return <Products language={language} />;
      case 'services':
        return <Services language={language} />;
      case 'news':
        return <News language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return <Hero language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
