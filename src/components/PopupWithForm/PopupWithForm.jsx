import { useEffect } from 'react';

function PopupWithForm({ isOpen, onClose, title, buttonText, onSubmit, children, alternativeText, onAlternativeClick }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative animate-slideUp shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          {title}
        </h2>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          {children}

          <button
            type="submit"
            className="w-full bg-accent-blue hover:bg-accent-blue-hover text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            {buttonText}
          </button>
        </form>

        {/* Alternative action */}
        {alternativeText && onAlternativeClick && (
          <div className="mt-6 text-center">
            <p className="text-text-secondary">
              o{' '}
              <button
                type="button"
                onClick={onAlternativeClick}
                className="text-accent-blue hover:text-accent-blue-hover font-medium transition-colors"
              >
                {alternativeText}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
