const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_BASE_URL = 'https://newsapi.org/v2';

const getLastWeekDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split('T')[0];
};

export const searchNews = async (query) => {
  const fromDate = getLastWeekDate();
  const url = `${NEWS_BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${fromDate}&sortBy=publishedAt&language=es&apiKey=${API_KEY}`;

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


export const validateArticle = (article) => (
  article
    && article.title
    && article.url
    && article.publishedAt
);


export const filterValidArticles = (articles) => articles
  .filter((article) => article && article.title && article.url && article.source)
  .map((article) => ({
    ...article,
    description: article.description || 'Sin descripción disponible',
    publishedAt: article.publishedAt || new Date().toISOString(),
    urlToImage: article.urlToImage || article.image || null,
  }));
