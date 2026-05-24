import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 dark:bg-gray-950 text-white py-12 mt-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-orange-400">🍔 FoodieHub</h3>
            <p className="text-gray-400">Delicious food delivered to your doorstep</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-orange-400 transition">Restaurants</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 246 Food Street, Lahore </li>
              <li>📞 +92 123 4567</li>
              <li>✉️ info@foodiehub.com</li>
              <li>🕐 Mon-Sun: 6pm - 2am</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Follow Us On:</h3>
            <ul className="space-y-2 text-gray-400">
              <li> Facebook</li>
              <li> Instagram</li>
              <li> Twitter</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          <p className="text-gray-400">&copy; 2026 FoodieHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;