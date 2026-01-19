import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn, currentPage, onSignIn, onSignOut, userName }) {
  const isHomePage = currentPage === 'home';
  const headerBg = isHomePage ? 'bg-gradient-to-b from-black/50 to-transparent' : 'bg-white border-b border-gray-200';
  const textColor = isHomePage ? 'text-white' : 'text-text-primary';

  return (
    <header className={`w-full ${headerBg} transition-colors duration-300`}>
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-16">
        <Navigation 
          isLoggedIn={isLoggedIn}
          currentPage={currentPage}
          onSignIn={onSignIn}
          onSignOut={onSignOut}
          textColor={textColor}
          userName={userName}
        />
      </div>
    </header>
  );
}

export default Header;
