const BACKEND_BASE_URL = import.meta.env.MODE === 'development'
  ? 'http://localhost:3000'
  : 'https://news-explorer-backend-production.up.railway.app';

export const searchNews = async (query) => {
  const url = `${BACKEND_BASE_URL}/news?q=${encodeURIComponent(query)}`;

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
