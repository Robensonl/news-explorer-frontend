// API configuration
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Calcular fecha de hace 7 días
const getLastWeekDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split('T')[0];
};

// Buscar noticias por palabra clave
export const searchNews = async (query) => {
  const fromDate = getLastWeekDate();
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${fromDate}&sortBy=publishedAt&language=es&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(data.message || 'Error al buscar noticias');
    }

    return data.articles || [];
  } catch (error) {
    console.error('Error al buscar noticias:', error);
    throw error;
  }
};

// Validar respuesta de la API
export const validateArticle = (article) => {
  return (
    article &&
    article.title &&
    article.url &&
    article.publishedAt
  );
};

// Filtrar artículos válidos
export const filterValidArticles = (articles) => {
  return articles.filter(validateArticle);
};
