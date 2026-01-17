// Constantes de la aplicación

// URLs y configuración de API
export const API_BASE_URL = 'https://newsapi.org/v2';

// Límites y configuraciones
export const ARTICLES_PER_PAGE = 3;
export const MAX_KEYWORD_LENGTH = 50;
export const SEARCH_DEBOUNCE_TIME = 500;

// Claves de localStorage
export const STORAGE_KEYS = {
  SEARCH_QUERY: 'lastSearchQuery'
};

// Mensajes de error
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, verifica tu conexión a internet.',
  API_ERROR: 'Error al obtener noticias. Intenta de nuevo más tarde.',
  NO_RESULTS: 'No se encontraron resultados para tu búsqueda.'
};

// Mensajes de éxito
export const SUCCESS_MESSAGES = {
  SEARCH_SUCCESS: 'Búsqueda realizada exitosamente'
};

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/'
};

// Breakpoints responsivos (coinciden con Tailwind)
export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1440
};
