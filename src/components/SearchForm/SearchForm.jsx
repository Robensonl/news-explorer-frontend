import { useState } from 'react';
import bgImage from '../../assets/images/hero-bg.jpg';

function SearchForm({ onSearch, isLoading }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setError('Por favor, introduce una palabra clave');
      return;
    }

    setError('');
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (error) setError('');
  };

  return (
    <section
      className="relative w-full bg-gradient-to-br from-gray-900 via-primary-black to-gray-800 bg-cover bg-center min-h-[520px] md:min-h-[640px] flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16 py-0 md:py-4 relative z-10 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Lo que pasa en el mundo
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-12">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={handleChange}
                  placeholder="Introduce el tema"
                  disabled={isLoading}
                  className={`w-full px-6 py-4 rounded-full text-base md:text-lg text-primary-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all ${
                    error ? 'ring-2 ring-red-500' : ''
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2 text-left ml-6">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-accent-blue hover:bg-accent-blue-hover text-white font-medium rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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
