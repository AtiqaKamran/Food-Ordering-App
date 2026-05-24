import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Restaurants', path: '/restaurants' },
  ];
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            🍔 FoodieHub
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-orange-500 transition ${
                  location.pathname === link.path ? 'text-orange-500 font-semibold' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition"
            >
              {darkMode ? <FaSun size={18} className="text-yellow-500" /> : <FaMoon size={18} className="text-gray-700" />}
            </button>
            
            <Link to="/cart" className="relative">
              <FaShoppingCart size={22} className="text-gray-700 dark:text-gray-300" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
          
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <FaSun size={16} className="text-yellow-500" /> : <FaMoon size={16} />}
            </button>
            <button className="text-gray-700 dark:text-gray-300 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 hover:text-orange-500 ${
                  location.pathname === link.path ? 'text-orange-500 font-semibold' : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/cart" className="block py-2 text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Cart ({getTotalItems()})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;