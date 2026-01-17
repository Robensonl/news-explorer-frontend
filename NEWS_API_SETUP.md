# Configuración de News API

## Obtener API Key

Para que la búsqueda de noticias funcione con datos reales, necesitas obtener una API key de News API:

### Paso 1: Registro
1. Ve a https://newsapi.org
2. Haz clic en "Get API Key"
3. Completa el formulario de registro
4. Recibirás tu API key por email

### Paso 2: Configurar en el Proyecto

Abre el archivo `src/utils/NewsApi.js` y reemplaza la línea:

```javascript
const API_KEY = 'YOUR_NEWS_API_KEY_HERE';
```

Por tu API key real:

```javascript
const API_KEY = 'tu-api-key-aqui';
```

### Paso 3: Probar

1. Reinicia el servidor de desarrollo si está corriendo
2. Busca cualquier término (ej: "tecnología", "deporte", "ciencia")
3. Deberías ver artículos reales de noticias de la última semana

## Características de la API

### Búsqueda
- **Endpoint**: `/everything`
- **Parámetros**:
  - `q`: Palabra clave de búsqueda
  - `from`: Fecha desde (últimos 7 días)
  - `sortBy`: Ordenar por fecha de publicación
  - `language`: Idioma de los artículos (es)

### Límites del Plan Gratuito
- **100 requests/día**
- Solo noticias de los últimos 30 días
- Máximo 100 resultados por request

### Ejemplo de Respuesta

```json
{
  "status": "ok",
  "totalResults": 35,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "El País"
      },
      "author": "Autor Ejemplo",
      "title": "Título del artículo",
      "description": "Descripción del artículo...",
      "url": "https://ejemplo.com/articulo",
      "urlToImage": "https://ejemplo.com/imagen.jpg",
      "publishedAt": "2026-01-15T10:30:00Z",
      "content": "Contenido del artículo..."
    }
  ]
}
```

## Modo Fallback

Si no configuras la API key o si alcanzas el límite de requests, la aplicación automáticamente usará artículos de ejemplo (mock data) para que puedas seguir desarrollando y probando la funcionalidad.

## Alternativas

Si prefieres usar otra API de noticias, puedes modificar la función `searchNews()` en `src/utils/NewsApi.js` para adaptarla a tu API favorita:

### The Guardian API
- https://open-platform.theguardian.com/
- Gratuita, mayor límite de requests

### New York Times API
- https://developer.nytimes.com/
- Requiere registro, muy completa

### GNews API
- https://gnews.io/
- Similar a News API, 100 requests/día gratis

## Solución de Problemas

### Error: "API key is invalid"
- Verifica que copiaste la API key correctamente
- Asegúrate de no tener espacios antes o después

### Error: "Rate limit exceeded"
- Has alcanzado el límite de 100 requests/día
- Espera hasta el día siguiente o usa el modo fallback

### No aparecen resultados
- Verifica tu conexión a internet
- Prueba con diferentes términos de búsqueda
- Revisa la consola del navegador para ver errores

### Artículos sin imagen
- Es normal, no todos los artículos tienen imagen
- La aplicación usa una imagen por defecto en estos casos

## Para Producción

⚠️ **IMPORTANTE**: Nunca subas tu API key a un repositorio público.

### Opción 1: Variables de Entorno (Recomendado)

1. Crea un archivo `.env` en la raíz del proyecto:
```
VITE_NEWS_API_KEY=tu-api-key-aqui
```

2. Actualiza `NewsApi.js`:
```javascript
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
```

3. Añade `.env` a `.gitignore`

### Opción 2: Backend Proxy (Más Seguro)

Cuando implementes el backend (Etapa 2), mueve la lógica de la API al servidor:

```javascript
// Backend
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  res.json(data);
});

// Frontend
const searchNews = async (query) => {
  const response = await fetch(`/api/search?query=${query}`);
  return await response.json();
};
```

## Recursos Adicionales

- [News API Documentación](https://newsapi.org/docs)
- [Ejemplos de Queries](https://newsapi.org/docs/endpoints/everything)
- [Códigos de Error](https://newsapi.org/docs/errors)

---

¿Necesitas ayuda? Revisa la documentación o contacta al equipo de TripleTen.
