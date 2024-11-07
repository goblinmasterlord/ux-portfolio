import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If on homepage, smooth scroll to work section
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, navigate to homepage and then scroll to work section
      window.location.href = '/#work';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-6">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display">Marci's Site</Link>
        <div className="flex items-center gap-8">
          <a 
            href="#work" 
            onClick={handleWorkClick}
            className="text-primary/60 hover:text-accent transition-colors duration-300"
          >
            Work
          </a>
          <Link 
            to="/contact" 
            className="text-primary/60 hover:text-accent transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;