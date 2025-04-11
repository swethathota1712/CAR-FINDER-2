export interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  seatingCapacity: number;
  imageUrl: string;
  year: number;
  transmission: 'Manual' | 'Automatic';
  mileage: number;
}

export interface FilterState {
  brand: string;
  minPrice: number;
  maxPrice: number;
  fuelType: string;
  seatingCapacity: number;
  search: string;
}

export interface SortOption {
  label: string;
  value: 'price_asc' | 'price_desc';
}