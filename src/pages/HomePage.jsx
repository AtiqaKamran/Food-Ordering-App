import { Link } from 'react-router-dom';
import { restaurants, categories } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';

const HomePage = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-800 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-28 md:py-36">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Best Food
              <span className="block text-yellow-300">Make your day great with our special meals!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Welcome to our food paradise, where every dish tells a story and every bite sparks joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/restaurants" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-block">
                Order Now
              </Link>
              <button onClick={scrollToFooter} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition inline-block cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">About Our Food</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We serve the most delicious food made with fresh ingredients and lots of love</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-6">
              <div className="text-4xl mb-3">🍔</div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Fresh Ingredients</h3>
              <p className="text-gray-500 dark:text-gray-400">We use only the freshest ingredients</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-500 dark:text-gray-400">Quick delivery at your doorstep</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Best Quality</h3>
              <p className="text-gray-500 dark:text-gray-400">Premium quality food every time</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{category[0]}</span>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">{category}</span>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants.slice(0, 3).map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
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
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center">
              <p className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">"Best food delivery service! Fast and delicious!"</p>
              <h4 className="font-bold text-gray-800 dark:text-white">- Huzaifa Khan</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center">
              <p className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">"Amazing quality food. Will order again!"</p>
              <h4 className="font-bold text-gray-800 dark:text-white">- Meerab Yasir</h4>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center">
              <p className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">"Quick delivery and great customer service"</p>
              <h4 className="font-bold text-gray-800 dark:text-white">- Sara Khan</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;