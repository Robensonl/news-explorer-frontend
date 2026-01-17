# News Explorer - Frontend

Aplicación React para buscar y guardar artículos de noticias usando News API. Construida con React, React Router y **Tailwind CSS** para un diseño moderno y responsivo.

## 🚀 Tecnologías

- **React 19.2.0** - Biblioteca de JavaScript para interfaces de usuario
- **React Router 7.12.0** - Enrutamiento para aplicaciones React
- **Tailwind CSS 3.4.17** - Framework de CSS utilitario
- **Vite 7.2.4** - Herramienta de construcción rápida
- **News API** - API para obtener artículos de noticias
- **ESLint** - Linter con configuración Airbnb

## ✨ Características

- 🔍 **Búsqueda de Noticias**: Busca artículos por palabra clave
- 💾 **Guardar Artículos**: Guarda tus artículos favoritos (requiere iniciar sesión)
- 📱 **Diseño Responsivo**: Funciona perfectamente en móvil, tablet y escritorio
- 🎨 **Interfaz Moderna**: Diseñada con Tailwind CSS pixel-perfect
- 🔐 **Autenticación**: Sistema de registro e inicio de sesión
- 🌐 **Navegación Fluida**: Enrutamiento con React Router

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/Robensonl/news-explorer-frontend.git
cd news-explorer-frontend

# Instala las dependencias
npm install
```

## 🔧 Desarrollo

```bash
# Inicia el servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173
```

## 🏗️ Build

```bash
# Construye para producción
npm run build

# Previsualiza la build
npm run preview
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── About/              # Página sobre el autor
│   ├── App.jsx             # Componente principal con routing
│   ├── Footer/             # Pie de página
│   ├── Header/             # Encabezado de navegación
│   ├── Main/               # Contenedor principal
│   ├── Navigation/         # Menú de navegación
│   ├── NewsCard/           # Tarjeta de artículo individual
│   ├── NewsCardList/       # Lista de artículos con paginación
│   ├── PopupWithForm/      # Modal reutilizable para formularios
│   ├── Preloader/          # Indicador de carga
│   ├── SavedNews/          # Página de artículos guardados
│   ├── SavedNewsHeader/    # Encabezado de artículos guardados
│   └── SearchForm/         # Formulario de búsqueda
├── vendor/                 # Fuentes y estilos de terceros
├── index.css               # Estilos globales con Tailwind
└── main.jsx                # Punto de entrada
```

## 🎨 Configuración de Tailwind CSS

El proyecto incluye un tema personalizado con:

- **Colores**: Paleta consistente (primary-black, accent-blue, etc.)
- **Fuentes**: Inter, Roboto, Roboto Slab
- **Sombras**: Efectos para tarjetas (card, card-hover)
- **Animaciones**: fadeIn, slideUp para modales
- **Breakpoints**: Responsive design móvil/tablet/desktop

## 📋 Etapas del Proyecto

- [x] **Etapa 0**: Preparación (14-15 ene)
- [x] **Etapa 1**: Front-End + API con Tailwind CSS (16-26 ene)
- [ ] **Etapa 2**: Back-End (27-30 ene) - Opcional
- [ ] **Etapa 3**: Autorización (31 ene - 2 feb) - Opcional
- [ ] **Etapa 4**: Finalización (3-4 feb)

## 🔑 Componentes Principales

### SearchForm
Formulario de búsqueda con validación y estado de carga.

### NewsCardList
Lista de tarjetas con botón "Mostrar más" para paginación.

### NewsCard
Tarjeta de artículo con:
- Imagen destacada
- Título y descripción
- Fecha de publicación
- Fuente del artículo
- Botón para guardar (solo usuarios autenticados)
- Tooltip para usuarios no autenticados

### PopupWithForm
Modal reutilizable para:
- Iniciar sesión
- Registrarse
- Cierre con ESC o clic fuera

### Header & Navigation
Navegación adaptativa con:
- Logo de la aplicación
- Enlaces a Inicio y Artículos guardados
- Botones de autenticación
- Menú móvil responsivo

## 📝 Notas de Desarrollo

- **BEM**: Estructura de componentes siguiendo metodología BEM
- **Reutilización**: Componentes modulares y reutilizables
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Performance**: Carga perezosa de imágenes y paginación
- **UX**: Animaciones suaves y feedback visual

## 🔜 Próximas Características

- [ ] Integración con News API real
- [ ] Backend personalizado para autenticación
- [ ] Persistencia de datos en base de datos
- [ ] Modo oscuro (dark mode)
- [ ] Filtros de búsqueda avanzados
- [ ] Compartir en redes sociales

## 👤 Autor

**Robenson Louissaint** (@Robensonl)
- Proyecto desarrollado como parte del bootcamp de TripleTen

## 🔗 Enlaces

- [Backend Repository](https://github.com/Robensonl/news-explorer-backend)
- [Diseño Figma](https://www.figma.com/design/J4KquU6h9U8eoDeOSaBPKW/Tu-proyecto-final-ESP)

## 📄 Licencia

© 2026 News Explorer. Desarrollado por TripleTen.