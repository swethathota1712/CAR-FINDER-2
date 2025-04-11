import { Heart } from 'lucide-react';
import type { Car } from '../types';
import { wishlistStorage } from '../lib/localStorage';
import { useState, useEffect } from 'react';

interface CarCardProps {
  car: Car;
  onWishlistChange: () => void;
}

export function CarCard({ car, onWishlistChange }: CarCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    setIsWishlisted(wishlistStorage.isInWishlist(car.id));
  }, [car.id]);

  const toggleWishlist = () => {
    if (isWishlisted) {
      wishlistStorage.removeFromWishlist(car.id);
    } else {
      wishlistStorage.addToWishlist(car);
    }
    setIsWishlisted(!isWishlisted);
    onWishlistChange();
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {car.brand} {car.model}
        </h3>
        <div className="mt-2 space-y-2">
          <p className="text-2xl font-bold text-gray-900">
            ${car.price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div>
              <span className="font-medium">Fuel Type:</span> {car.fuelType}
            </div>
            <div>
              <span className="font-medium">Year:</span> {car.year}
            </div>
            <div>
              <span className="font-medium">Seats:</span> {car.seatingCapacity}
            </div>
            <div>
              <span className="font-medium">Transmission:</span> {car.transmission}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}