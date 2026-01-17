import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation({ currentPage, textColor }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = (page) => {
    const isActive = currentPage === page;
    const baseClass = `${textColor} hover:opacity-70 transition-opacity duration-200 pb-1`;
    return isActive ? `${baseClass} border-b-2 border-current` : baseClass;
  };

  return (
    <nav className="flex items-center justify-between py-6 md:py-8">
      {/* Logo */}
      <Link 
        to="/" 
        className={`text-xl md:text-2xl font-bold ${textColor} hover:opacity-70 transition-opacity`}
      >
        NewsExplorer
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className={linkClass('home')}>
          Inicio
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden ${textColor} p-2`}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-6 gap-6">
            <Link 
              to="/" 
              className="text-primary-black text-lg hover:text-accent-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
