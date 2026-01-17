# Guía de Uso de Tailwind CSS en News Explorer

## 📖 Introducción

Este proyecto utiliza **Tailwind CSS** como framework de estilos. Tailwind es un framework de CSS utilitario que permite construir interfaces modernas directamente en el JSX usando clases predefinidas.

## 🎨 Tema Personalizado

El proyecto incluye un tema personalizado configurado en `tailwind.config.js`:

### Colores

```jsx
// Colores principales
className="bg-primary-black text-primary-white"
className="text-text-primary"      // Negro para texto principal
className="text-text-secondary"    // Gris para texto secundario
className="bg-accent-blue"         // Azul para botones y enlaces
className="hover:bg-accent-blue-hover"  // Azul más claro al hover
className="bg-background-light"    // Gris claro para fondos
```

### Tipografía

```jsx
className="font-inter"        // Fuente principal Inter
className="font-roboto"       // Roboto alternativa
className="font-roboto-slab"  // Roboto Slab para títulos
```

### Espaciado y Layout

```jsx
className="max-w-content"     // Ancho máximo de 1232px para contenido
className="max-w-container"   // Ancho máximo de 1440px
className="px-4 md:px-8 lg:px-16"  // Padding responsivo horizontal
```

### Sombras

```jsx
className="shadow-card"           // Sombra suave para tarjetas
className="hover:shadow-card-hover"  // Sombra más pronunciada al hover
```

### Border Radius

```jsx
className="rounded-card"       // Border radius de 16px
className="rounded-full"       // Circular completo (para botones)
className="rounded-lg"         // Border radius grande (8px)
```

## 📱 Diseño Responsivo

Tailwind usa breakpoints mobile-first:

```jsx
// Móvil (por defecto): < 768px
className="text-xl"

// Tablet: >= 768px
className="md:text-2xl"

// Desktop: >= 1024px
className="lg:text-3xl"

// Ejemplo completo:
className="px-4 md:px-8 lg:px-16 text-xl md:text-2xl lg:text-3xl"
```

### Grid Responsivo

```jsx
// 1 columna en móvil, 2 en tablet, 3 en desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Flex Responsivo

```jsx
// Columna en móvil, fila en desktop
className="flex flex-col md:flex-row gap-4"
```

## 🎭 Estados Interactivos

### Hover

```jsx
className="hover:bg-primary-black hover:text-white transition-colors"
```

### Focus

```jsx
className="focus:outline-none focus:ring-2 focus:ring-accent-blue"
```

### Disabled

```jsx
className="disabled:opacity-50 disabled:cursor-not-allowed"
```

### Active

```jsx
className="active:scale-95"
```

## 🎬 Animaciones

### Animaciones Personalizadas

```jsx
// Fade in (definido en tailwind.config.js)
className="animate-fadeIn"

// Slide up
className="animate-slideUp"

// Spin (para preloader)
className="animate-spin"
```

### Transiciones

```jsx
// Transición de colores
className="transition-colors duration-200"

// Transición de todo
className="transition-all duration-300"

// Transición de transform
className="transition-transform duration-200 hover:scale-105"
```

## 🧩 Patrones Comunes

### Botón Principal

```jsx
<button className="px-8 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
  Buscar
</button>
```

### Botón Secundario (Outline)

```jsx
<button className="px-5 py-2 border border-primary-black text-primary-black hover:bg-primary-black hover:text-white rounded-full font-medium transition-all">
  Iniciar sesión
</button>
```

### Input de Formulario

```jsx
<input 
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
  placeholder="Tu email"
/>
```

### Tarjeta (Card)

```jsx
<div className="bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
  {/* Contenido */}
</div>
```

### Overlay Modal

```jsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn">
  {/* Modal content */}
</div>
```

### Contenedor Centrado

```jsx
<div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
  {/* Contenido */}
</div>
```

## 🔧 Utilidades Útiles

### Truncado de Texto

```jsx
// Truncar a 2 líneas
className="line-clamp-2"

// Truncar a 3 líneas
className="line-clamp-3"

// Una línea con ellipsis
className="truncate"
```

### Espaciado

```jsx
className="space-y-4"    // Espacio vertical entre hijos
className="space-x-4"    // Espacio horizontal entre hijos
className="gap-4"        // Gap en grid o flex
```

### Posicionamiento

```jsx
className="relative"     // Posición relativa
className="absolute"     // Posición absoluta
className="fixed"        // Posición fija
className="inset-0"      // top-0 right-0 bottom-0 left-0
```

### Z-index

```jsx
className="z-10"   // z-index: 10
className="z-50"   // z-index: 50 (para modales)
```

## 💡 Mejores Prácticas

### 1. Orden de Clases Recomendado

```jsx
// Layout -> Box Model -> Typography -> Visual -> Misc
className="
  flex items-center justify-center    // Layout
  w-full h-screen p-4 m-2             // Box Model
  text-lg font-bold text-center       // Typography
  bg-white text-black rounded-lg      // Visual
  hover:shadow-lg transition-all      // Interactive
"
```

### 2. Componentes Reutilizables

Si un conjunto de clases se repite mucho, considera crear un componente:

```jsx
// ❌ Malo: Repetir clases
<button className="px-8 py-3 bg-accent-blue...">Buscar</button>
<button className="px-8 py-3 bg-accent-blue...">Enviar</button>

// ✅ Bueno: Componente reutilizable
function PrimaryButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-8 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white font-medium rounded-full transition-all"
    >
      {children}
    </button>
  );
}
```

### 3. Condicionales

```jsx
// Clases condicionales
<div className={`
  base-class
  ${isActive ? 'bg-accent-blue' : 'bg-gray-200'}
  ${isLarge ? 'text-xl' : 'text-base'}
`}>
```

### 4. Dark Mode (preparado para futuro)

```jsx
// El proyecto está configurado con darkMode: 'class'
className="bg-white dark:bg-gray-900 text-black dark:text-white"
```

## 🚀 Comandos Útiles

```bash
# Regenerar CSS de Tailwind (si es necesario)
npx tailwindcss -i ./src/index.css -o ./dist/output.css

# Limpiar caché de Tailwind
rm -rf node_modules/.cache
```

## 📚 Recursos

- [Documentación Oficial de Tailwind](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind Play (Editor Online)](https://play.tailwindcss.com/)

## 🎯 Ejemplos Específicos del Proyecto

### Header con Fondo Transparente

```jsx
<header className={`
  w-full transition-colors duration-300
  ${isHomePage 
    ? 'bg-gradient-to-b from-black/50 to-transparent' 
    : 'bg-white border-b border-gray-200'
  }
`}>
```

### Animación del Preloader

```jsx
<div className="relative w-16 h-16">
  <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
  <div className="absolute inset-0 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
</div>
```

### Menú Móvil

```jsx
{isMobileMenuOpen && (
  <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden z-50">
    <div className="flex flex-col p-6 gap-6">
      {/* Items del menú */}
    </div>
  </div>
)}
```

---

¡Con esta guía deberías poder trabajar eficientemente con Tailwind CSS en el proyecto News Explorer! 🚀
