import { Link } from 'react-router-dom';
import { restaurants, categories } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';

const HomePage = () => {
  // Function to scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-sizzling-steak-on-a-grill-32844-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-sauce-over-meat-2171-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fresh-pizza-from-the-oven-1395-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">
              Best Food
              <span className="block text-yellow-300">Make your day great with our special meals!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fadeInUp animation-delay-200">
              Welcome to our food paradise, where every dish tells a story and every bite sparks joy.
              Fresh ingredients, fast delivery, and unforgettable taste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <Link 
                to="/restaurants" 
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition transform hover:scale-105 inline-block"
              >
                Order Now
              </Link>
              {/* Explore Now button - Scrolls to About section */}
              <button 
                onClick={scrollToAbout}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition inline-block cursor-pointer"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Added id="about-section" */}
      <div id="about-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">About Our Food</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We serve the most delicious food made with fresh ingredients and lots of love</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-6 hover:shadow-lg rounded-xl transition group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition">🍔</div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Fresh Ingredients</h3>
              <p className="text-gray-500 dark:text-gray-400">We use only the freshest ingredients from local farms</p>
            </div>
            <div className="p-6 hover:shadow-lg rounded-xl transition group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition">🚚</div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-500 dark:text-gray-400">Quick delivery at your doorstep within 30-40 minutes</p>
            </div>
            <div className="p-6 hover:shadow-lg rounded-xl transition group">
              <div className="text-5xl mb-3 group-hover:scale-110 transition">⭐</div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Best Quality</h3>
              <p className="text-gray-500 dark:text-gray-400">Premium quality food prepared by expert chefs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Popular Categories</h2>
            <p className="text-gray-600 dark:text-gray-400">Choose from our wide variety of delicious options</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to="/restaurants"
                className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                  <span className="text-2xl">{category[0]}</span>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Restaurants */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Featured Restaurants</h2>
            <p className="text-gray-600 dark:text-gray-400">Handpicked just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.slice(0, 3).map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 dark:text-gray-400">Loved by thousands of food lovers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-xl transition">
              <p className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">"Best food delivery service! Fast and delicious!"</p>
              <h4 className="font-bold text-gray-800 dark:text-white">- Sarah Khan</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-xl transition">
              <p className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">"Amazing quality food. Will order again! Loved the drinks section"</p>
              <h4 className="font-bold text-gray-800 dark:text-white">- Meerab Yasir</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-xl transition">
              <p className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">"Quick delivery and great customer service. The coffee is amazing!"</p>
              <h4 className="font-bold text-gray-800 dark:text-white">- Fatima Ali</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;