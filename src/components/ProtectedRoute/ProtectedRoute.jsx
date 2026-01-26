import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn, onSignIn }) {
  if (!isLoggedIn) {
    setTimeout(() => {
      onSignIn();
    }, 0);
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
