// Constantes de la aplicación

// URLs y configuración de API
export const API_BASE_URL = 'https://newsapi.org/v2';
export const BACKEND_URL = 'http://localhost:3000';

// Límites y configuraciones
export const ARTICLES_PER_PAGE = 3;
export const MAX_KEYWORD_LENGTH = 50;
export const SEARCH_DEBOUNCE_TIME = 500;

// Claves de localStorage
export const STORAGE_KEYS = {
  CURRENT_USER: 'currentUser',
  SAVED_ARTICLES: 'savedArticles',
  AUTH_TOKEN: 'authToken',
  SEARCH_QUERY: 'lastSearchQuery'
};

// Mensajes de error
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, verifica tu conexión a internet.',
  API_ERROR: 'Error al obtener noticias. Intenta de nuevo más tarde.',
  VALIDATION_EMAIL: 'Por favor, introduce un email válido.',
  VALIDATION_PASSWORD: 'La contraseña debe tener al menos 8 caracteres.',
  VALIDATION_NAME: 'El nombre debe tener al menos 2 caracteres.',
  VALIDATION_REQUIRED: 'Este campo es obligatorio.',
  AUTH_FAILED: 'Email o contraseña incorrectos.',
  SIGNUP_FAILED: 'Error al crear la cuenta. El email puede estar en uso.',
  NO_RESULTS: 'No se encontraron resultados para tu búsqueda.'
};

// Mensajes de éxito
export const SUCCESS_MESSAGES = {
  ARTICLE_SAVED: 'Artículo guardado exitosamente',
  ARTICLE_REMOVED: 'Artículo eliminado de guardados',
  LOGIN_SUCCESS: 'Sesión iniciada correctamente',
  SIGNUP_SUCCESS: 'Cuenta creada exitosamente',
  LOGOUT_SUCCESS: 'Sesión cerrada'
};

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  SAVED_NEWS: '/saved-news'
};

// Breakpoints responsivos (coinciden con Tailwind)
export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1440
};
