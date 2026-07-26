import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlistItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item) => {
    const exists = wishlistItems.find(i => i.id === item.id);
    if (exists) {
      setWishlistItems(wishlistItems.filter(i => i.id !== item.id));
    } else {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const isInWishlist = (id) => {
    return wishlistItems.some(item => item.id === id);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // NEW: Clear entire wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems, 
      addToWishlist, 
      isInWishlist, 
      removeFromWishlist,
      clearWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};