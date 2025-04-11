import type { Car } from '../types';

const WISHLIST_KEY = 'carFinder_wishlist';

export const wishlistStorage = {
  getWishlist: (): Car[] => {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  },

  addToWishlist: (car: Car): void => {
    const wishlist = wishlistStorage.getWishlist();
    if (!wishlist.some(item => item.id === car.id)) {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify([...wishlist, car]));
    }
  },

  removeFromWishlist: (carId: string): void => {
    const wishlist = wishlistStorage.getWishlist();
    localStorage.setItem(
      WISHLIST_KEY,
      JSON.stringify(wishlist.filter(car => car.id !== carId))
    );
  },

  isInWishlist: (carId: string): boolean => {
    const wishlist = wishlistStorage.getWishlist();
    return wishlist.some(car => car.id === carId);
  }
};