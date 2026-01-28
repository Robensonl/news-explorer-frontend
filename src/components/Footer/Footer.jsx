import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-text-secondary text-sm">
              © {currentYear} News Explorer. Todos los derechos reservados.
            </p>
            
            <nav className="flex gap-6">
              <Link 
                to="/" 
                className="text-text-primary hover:text-accent-blue transition-colors text-sm font-medium"
              >
                Inicio
              </Link>
             <a
                href="https://www.linkedin.com/in/robenson-louissaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent-blue transition-colors text-sm font-medium"
              >
                LinkedIn
              </a> 
            </nav>
          </div>
          <div className="flex gap-6">
            <a
            href="https://github.com/Robensonl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent-blue transition-colors"
            aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;