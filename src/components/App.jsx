import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import NewsCardList from './NewsCardList/NewsCardList';
import About from './About/About';
import Preloader from './Preloader/Preloader';
import { searchNews, filterValidArticles } from '../utils/NewsApi';
import { 
  getFromLocalStorage,
  saveToLocalStorage
} from '../utils/utils';
import { STORAGE_KEYS, ERROR_MESSAGES } from '../utils/constants';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    setError('');
    setHasSearched(true);

    try {
      // Intenta buscar con la API real
      const foundArticles = await searchNews(query);
      const validArticles = filterValidArticles(foundArticles);
      setArticles(validArticles);
      
      // Guardar última búsqueda
      saveToLocalStorage(STORAGE_KEYS.SEARCH_QUERY, query);
    } catch (error) {
      console.error('Error al buscar noticias:', error);
      setError(ERROR_MESSAGES.API_ERROR);
      
      // Fallback: usar datos de ejemplo si la API falla
      const mockArticles = [
        {
          title: 'Descubrimiento científico revoluciona la industria tecnológica',
          description: 'Un nuevo avance en computación cuántica promete cambiar el panorama tecnológico mundial.',
          url: 'https://example.com/article1',
          urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
          publishedAt: new Date().toISOString(),
          source: { name: 'Tech News' }
        },
        {
          title: 'Cambio climático: nuevas medidas adoptadas a nivel global',
          description: 'Líderes mundiales se reúnen para discutir estrategias contra el cambio climático.',
          url: 'https://example.com/article2',
          urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
          publishedAt: new Date(Date.now() - 86400000).toISOString(),
          source: { name: 'Global News' }
        },
        {
          title: 'Innovación en energías renovables alcanza récord histórico',
          description: 'La producción de energía solar y eólica supera todas las expectativas este año.',
          url: 'https://example.com/article3',
          urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
          publishedAt: new Date(Date.now() - 172800000).toISOString(),
          source: { name: 'Energy Today' }
        }
      ];
      setArticles(mockArticles);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <AppContent
        articles={articles}
        isLoading={isLoading}
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
    </Router>
  );
}

function AppContent({ 
  articles, 
  isLoading, 
  searchQuery,
  onSearch
}) {
  const location = useLocation();
  const currentPage = location.pathname === '/saved-news' ? 'saved' : 'home';

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        currentPage={currentPage}
      />

      <Routes>
        <Route path="/" element={
          <Main>
            <SearchForm onSearch={onSearch} isLoading={isLoading} />
            {isLoading ? (
              <Preloader />
            ) : articles.length > 0 ? (
              <NewsCardList
                articles={articles}
              />
            ) : null}
            <About />
          </Main>
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
