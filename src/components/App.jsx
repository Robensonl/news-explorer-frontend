import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import NewsCardList from './NewsCardList/NewsCardList';
import SavedNews from './SavedNews/SavedNews';
import About from './About/About';
import Preloader from './Preloader/Preloader';
import Login from './Login/Login';
import Register from './Register/Register';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { searchNews, filterValidArticles } from '../utils/NewsApi';
import * as MainApi from '../utils/MainApi';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage
} from '../utils/auth';
import { STORAGE_KEYS } from '../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const closeAllPopups = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
  };

  useEffect(() => {
    const token = getFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
    
    // Restaurar artículos guardados del localStorage si existen
    const cachedSavedArticles = getFromLocalStorage(STORAGE_KEYS.SAVED_ARTICLES);
    if (cachedSavedArticles) {
      setSavedArticles(cachedSavedArticles);
    }

    if (!token) return;

    MainApi.checkToken(token)
      .then(user => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        return MainApi.getSavedArticles(token);
      })
      .then(articles => {
        // Normalizar artículos guardados del backend
        const normalizedArticles = articles.map(article => ({
          ...article,
          title: article.title || 'Sin título',
          description: article.text || 'Sin descripción disponible',
          publishedAt: article.date || new Date().toISOString(),
          urlToImage: article.image || null,
          url: article.link || article.url,
          source: article.source ? (typeof article.source === 'string' ? { name: article.source } : article.source) : { name: 'Fuente desconocida' }
        }));
        setSavedArticles(normalizedArticles);
        saveToLocalStorage(STORAGE_KEYS.SAVED_ARTICLES, normalizedArticles);
      })
      .catch(() => {
        removeFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
      });
  }, []);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    setArticles([]);
    closeAllPopups();

    try {
      const foundArticles = await searchNews(query);
      const validArticles = filterValidArticles(foundArticles);
      setArticles(validArticles);
      saveToLocalStorage(STORAGE_KEYS.SEARCH_QUERY, query);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (name, email, password) => {
    await MainApi.register(name, email, password);
  };

  const handleLogin = async (email, password) => {
    const { token } = await MainApi.login(email, password);

    saveToLocalStorage(STORAGE_KEYS.AUTH_TOKEN, token);

    const user = await MainApi.checkToken(token);
    setCurrentUser(user);
    setIsLoggedIn(true);

    const articles = await MainApi.getSavedArticles(token);
    setSavedArticles(articles);

    closeAllPopups();
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
    removeFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
    removeFromLocalStorage(STORAGE_KEYS.SAVED_ARTICLES);
    closeAllPopups();
  };

  const handleSaveArticle = async (article) => {
    if (!article?.title || !article?.url) return;

    if (!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }

    const token = getFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) return;

    const articleData = {
      keyword: searchQuery,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage
    };

      try {
      const savedArticle = await MainApi.saveArticle(token, articleData);
      const updatedArticles = [...savedArticles, { ...article, keyword: searchQuery, _id: savedArticle._id }];
      setSavedArticles(updatedArticles);
      saveToLocalStorage(STORAGE_KEYS.SAVED_ARTICLES, updatedArticles);
    } catch (error) {
      console.error('Error al guardar artículo:', error);
    }
  };

  const handleRemoveArticle = async (article) => {
    const token = getFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) return;

    await MainApi.deleteArticle(token, article._id);
    const updatedArticles = savedArticles.filter(a => a._id !== article._id);
    setSavedArticles(updatedArticles);
    saveToLocalStorage(STORAGE_KEYS.SAVED_ARTICLES, updatedArticles);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Router>
        <AppContent
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          articles={articles}
          savedArticles={savedArticles}
          isLoading={isLoading}
          searchQuery={searchQuery}
          showLoginPopup={showLoginPopup}
          showRegisterPopup={showRegisterPopup}
          onSearch={handleSearch}
          onSaveArticle={handleSaveArticle}
          onRemoveArticle={handleRemoveArticle}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onSignOut={handleSignOut}
          setShowLoginPopup={setShowLoginPopup}
          setShowRegisterPopup={setShowRegisterPopup}
          closeAllPopups={closeAllPopups}
        />
      </Router>
    </CurrentUserContext.Provider>
  );
}

function AppContent({
  currentUser,
  isLoggedIn,
  articles,
  savedArticles,
  isLoading,
  searchQuery,
  showLoginPopup,
  showRegisterPopup,
  onSearch,
  onSaveArticle,
  onRemoveArticle,
  onLogin,
  onRegister,
  onSignOut,
  setShowLoginPopup,
  setShowRegisterPopup,
  closeAllPopups
}) {
  const location = useLocation();
  const currentPage = location.pathname === '/saved-news' ? 'saved' : 'home';

  useEffect(() => {
    closeAllPopups();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isLoggedIn={isLoggedIn}
        currentPage={currentPage}
        onSignIn={() => setShowLoginPopup(true)}
        onSignOut={onSignOut}
        userName={currentUser?.name || ''}
      />

      <Routes>
        <Route path="/" element={
          <Main>
            <SearchForm onSearch={onSearch} isLoading={isLoading} />
            {isLoading && <Preloader />}
            {!isLoading && searchQuery && (
              <NewsCardList
                articles={articles}
                isLoggedIn={isLoggedIn}
                savedArticles={savedArticles}
                onSaveArticle={onSaveArticle}
                onRemoveArticle={onRemoveArticle}
                showKeyword={false}
                keyword={searchQuery}
              />
            )}
            <About />
          </Main>
        } />

        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} onSignIn={() => setShowLoginPopup(true)}>
              <Main>
                <SavedNews
                  userName={currentUser?.name || 'Usuario'}
                  savedArticles={savedArticles}
                  onRemoveArticle={onRemoveArticle}
                />
              </Main>
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />

      {showLoginPopup && (
        <Login
          onClose={closeAllPopups}
          onLogin={onLogin}
          onSwitchToRegister={() => {
            closeAllPopups();
            setShowRegisterPopup(true);
          }}
        />
      )}

      {showRegisterPopup && (
        <Register
          onClose={closeAllPopups}
          onRegister={onRegister}
          onSwitchToLogin={() => {
            closeAllPopups();
            setShowLoginPopup(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
