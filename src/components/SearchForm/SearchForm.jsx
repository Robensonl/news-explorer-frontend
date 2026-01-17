import { useState } from 'react';

function SearchForm({ onSearch, isLoading }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError('Por favor, introduce una palabra clave');
      return;
    }

    setError('');
    onSearch(searchQuery.trim());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <section className="relative bg-cover bg-center min-h-[500px] flex items-center" 
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80)' }}>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      
      <div className="relative z-10 max-w-content mx-auto px-4 md:px-8 lg:px-16 w-full py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Qué está pasando en el mundo?
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal.
          </p>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleChange}
                  placeholder="Introduce un tema"
                  disabled={isLoading}
                  className={`w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all ${
                    error ? 'ring-2 ring-red-500' : ''
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 ml-6">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-8 py-4 bg-accent-blue text-white rounded-full font-medium text-lg hover:bg-accent-blue-hover transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Buscando...' : 'Buscar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
