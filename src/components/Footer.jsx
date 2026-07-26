import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaHome, FaUtensils, FaHeartbeat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-10 mt-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-orange-400">🍔 FoodieHub</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delicious food delivered to your doorstep. Fresh ingredients, fast delivery, and unforgettable taste.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition flex items-center justify-center md:justify-start gap-2">
                  <FaHome size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-400 hover:text-orange-400 transition flex items-center justify-center md:justify-start gap-2">
                  <FaUtensils size={14} /> Restaurants
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-400 hover:text-orange-400 transition flex items-center justify-center md:justify-start gap-2">
                  <FaHeartbeat size={14} /> Wishlist
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Follow Us On  */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Follow Us On</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">Connect with us on social media</p>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center mt-10 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2026 FoodieHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;