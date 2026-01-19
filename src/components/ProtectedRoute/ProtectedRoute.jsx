import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn, onSignIn }) {
  if (!isLoggedIn) {
    // Abrir popup de login y redirigir a home
    setTimeout(() => {
      onSignIn();
    }, 0);
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
