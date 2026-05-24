export const restaurants = [
  { id: 1, name: "Pizza Paradise", cuisine: "Italian", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300", deliveryTime: "25-30 min", rating: 4.5 },
  { id: 2, name: "Burger King", cuisine: "American", image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=300", deliveryTime: "20-25 min", rating: 4.3 },
  { id: 3, name: "Sushi Master", cuisine: "Japanese", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300", deliveryTime: "30-40 min", rating: 4.7 },
  { id: 4, name: "Taco Bell", cuisine: "Mexican", image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=300", deliveryTime: "15-20 min", rating: 4.2 },
  { id: 5, name: "China Wok", cuisine: "Chinese", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300", deliveryTime: "25-35 min", rating: 4.4 },
  { id: 6, name: "Healthy Bowl", cuisine: "Healthy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300", deliveryTime: "20-25 min", rating: 4.6 }
];

export const foodItems = [
  { id: 101, restaurantId: 1, name: "Tikka Pizza", description: "Mzzarella cheese, tomato sauce, Onions", price: 12.99, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=150" },
  { id: 102, restaurantId: 1, name: "Pepperoni Pizza", description: "Double pepperoni, mozzarella, tomato sauce", price: 14.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=150" },
  { id: 201, restaurantId: 2, name: "Classic Burger", description: "Flame-grilled beef, lettuce, tomato, onion", price: 8.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150" },
  { id: 202, restaurantId: 2, name: "Chicken Burger", description: "Crispy chicken, mayo, lettuce", price: 7.99, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=150" },
  { id: 301, restaurantId: 3, name: "California Sushi", description: "Crab, avocado, cucumber", price: 11.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=150" },
  { id: 302, restaurantId: 3, name: "Spicy Sushi", description: "Tuna, spicy mayo, cucumber", price: 13.99, image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?w=150" },
  { id: 401, restaurantId: 4, name: "Crunchy Taco", description: "Seasoned beef, lettuce, cheese", price: 2.99, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=150" },
  { id: 402, restaurantId: 4, name: "Chicken Taco", description: "Grilled chicken, cheese, sauce", price: 6.99, image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=150" },
  { id: 501, restaurantId: 5, name: "Kung Pao Chicken", description: "Spicy chicken with peanuts and vegetables", price: 12.99, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=150" },
  { id: 502, restaurantId: 5, name: "Fried Rice", description: "Eggs, peas, carrots, soy sauce", price: 7.99, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=150" },
  { id: 601, restaurantId: 6, name: "Fresh Salad", description: "Quinoa, avocado, cherry tomatoes, cucumber", price: 10.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" }
];

export const categories = ["Pizza", "Burgers", "Sushi", "Mexican", "Chinese", "Salads"];