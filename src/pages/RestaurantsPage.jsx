import { useState } from 'react';
import { restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';
import { FaSearch, FaSlidersH, FaTimes } from 'react-icons/fa';

const RestaurantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  
  // Get unique cuisines
  const cuisines = ['All', ...new Set(restaurants.map(r => r.cuisine))];
  
  // Filter restaurants
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
            Find Your <span className="text-yellow-300">Favorite Restaurant</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Discover the best dining experiences in your city
          </p>
        </div>
        {/* Wave SVG at bottom */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 0V60H0Z" fill="currentColor" fillOpacity="0.1" className="text-gray-50 dark:text-gray-900"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search by restaurant name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-orange-500 transition-all duration-300 shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                <FaTimes className="text-gray-400 hover:text-red-500 transition" />
              </button>
            )}
          </div>
          
          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition mb-4"
          >
            <FaSlidersH />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          
          {/* Filter Chips */}
          {showFilters && (
            <div className="flex flex-wrap gap-2 animate-fadeInUp">
              {cuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCuisine === cuisine
                      ? 'bg-orange-500 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-orange-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Results Stats */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Showing <span className="font-bold text-orange-500">{filteredRestaurants.length}</span> of{' '}
              <span className="font-bold">{restaurants.length}</span> restaurants
            </p>
          </div>
          {filteredRestaurants.length === 0 && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCuisine('All');
              }}
              className="text-orange-500 hover:text-orange-600 transition"
            >
              Clear all filters
            </button>
          )}
        </div>
        
        {/* Restaurants Grid */}
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No restaurants found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCuisine('All');
              }}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantsPage;