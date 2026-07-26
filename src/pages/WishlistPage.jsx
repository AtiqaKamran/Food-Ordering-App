import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaHeart, FaTrash, FaShoppingCart, FaStar, FaTrashAlt } from 'react-icons/fa';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK').format(price);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FaHeart className="text-5xl text-pink-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-3">Your wishlist is empty</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Save your favorite food items here! Click the heart icon on any food item to add to wishlist.
          </p>
          <Link 
            to="/restaurants" 
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition transform hover:scale-105 inline-block"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full mb-4">
            <FaHeart className="text-2xl text-pink-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">My Wishlist</h1>
          <p className="text-gray-600 dark:text-gray-400">
            You have <span className="font-bold text-orange-500">{wishlistItems.length}</span> items in your wishlist
          </p>
        </div>
        
        {/* Clear All Button */}
        <div className="flex justify-end mb-6 max-w-7xl mx-auto">
          <button
            onClick={clearWishlist}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            <FaTrashAlt size={14} /> Clear All Wishlist
          </button>
        </div>
        
        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {wishlistItems.map(item => (
            <div key={item.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Remove Button */}
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-lg hover:scale-110"
                  title="Remove from wishlist"
                >
                  <FaTrash size={12} />
                </button>
                {/* Heart Badge */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <FaHeart className="text-red-500 text-xs" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                    <FaStar className="text-yellow-500 text-xs" />
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">4.5</span>
                  </div>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Popular</span>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className="text-orange-500 font-bold text-xl">₨ {formatPrice(item.price)}</span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl hover:shadow-lg transition flex items-center gap-2 text-sm"
                  >
                    <FaShoppingCart size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Browse More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/restaurants" 
            className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
          >
            Browse More Restaurants →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;