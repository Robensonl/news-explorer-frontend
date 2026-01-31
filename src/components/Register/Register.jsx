import { useState, useEffect } from 'react';
import { validateEmail, validatePassword, validateName } from '../../utils/auth';

function Register({ onClose, onRegister, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  setFormData({ name: '', email: '', password: '' });
  setErrors({});
  setServerError('');
  setSuccess(false);
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
       ...prev, [name]: value 
      }));
    
    // Validación en tiempo real
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (serverError) {
      setServerError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setServerError('');
    
    try {
      await onRegister(formData.name, formData.email, formData.password);
      setSuccess(true);
    } catch (error) {
      setServerError('Error al crear la cuenta. El email puede estar en uso.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.password && 
                      Object.keys(errors).length === 0;

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  onClick={(e) => {
    if (e.target === e.currentTarget) onClose();
  }}>
        <div className="bg-white rounded-2xl max-w-md w-full p-8 relative text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4">
            ¡Registro exitoso!
          </h2>
          <p className="text-text-secondary mb-6">
            Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.
          </p>

          <button
            onClick={onSwitchToLogin}
            className="w-full py-3 bg-accent-blue text-white rounded-full font-medium hover:bg-accent-blue-hover transition-all"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-white rounded-2xl w-full p-6 sm:p-8 md:p-10 lg:p-12">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-6 lg:mb-8">Inscribirse</h2>

        <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base lg:text-lg font-medium text-accent-blue mb-2 lg:mb-3">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-0 py-3 lg:py-4 text-base lg:text-lg border-b-2 focus:outline-none focus:border-accent-blue transition-all bg-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Introduce tu nombre"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-base lg:text-lg font-medium text-accent-blue mb-2 lg:mb-3">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-0 py-3 lg:py-4 text-base lg:text-lg border-b-2 focus:outline-none focus:border-accent-blue transition-all bg-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Introduce tu correo"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm sm:text-base lg:text-lg font-medium text-accent-blue mb-2 lg:mb-3">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-0 py-3 lg:py-4 text-base lg:text-lg border-b-2 focus:outline-none focus:border-accent-blue transition-all bg-transparent ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Introduce tu contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {serverError && (
            <p className="text-red-500 text-sm text-center">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 lg:py-4 text-base lg:text-lg rounded-full font-medium transition-all mt-6 lg:mt-8 ${
              isFormValid && !isSubmitting
                ? 'bg-accent-blue text-white hover:bg-accent-blue-hover'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Inscribiendo...' : 'Inscribirse'}
          </button>

          <p className="text-center text-text-secondary mt-4">
            o{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-accent-blue hover:text-accent-blue-hover font-medium transition-colors"
            >
              inscribirse
            </button>
          </p>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
