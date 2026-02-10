import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn, onSignIn }) {
  useEffect(() => {
    if (!isLoggedIn) {
      onSignIn();
    }
  }, [isLoggedIn, onSignIn]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
