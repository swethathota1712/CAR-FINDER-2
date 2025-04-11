import type { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    price: 35000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
    year: 2023,
    transmission: 'Automatic',
    mileage: 15.5
  },
  {
    id: '2',
    brand: 'Tesla',
    model: 'Model 3',
    price: 45000,
    fuelType: 'Electric',
    seatingCapacity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771',
    year: 2023,
    transmission: 'Automatic',
    mileage: 0
  },
  {
    id: '3',
    brand: 'Honda',
    model: 'CR-V',
    price: 32000,
    fuelType: 'Hybrid',
    seatingCapacity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb',
    year: 2023,
    transmission: 'Automatic',
    mileage: 18.5
  }
  // Add more mock cars as needed
];

export const brands = ['All', 'Toyota', 'Tesla', 'Honda', 'BMW', 'Mercedes', 'Audi'];
export const fuelTypes = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];
export const seatingCapacities = [0, 2, 4, 5, 7, 8];