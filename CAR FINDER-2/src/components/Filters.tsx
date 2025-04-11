import { brands, fuelTypes, seatingCapacities } from '../lib/mockData';
import type { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  const handleChange = (key: keyof FilterState, value: string | number) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brand
        </label>
        <select
          value={filters.brand}
          onChange={(e) => handleChange('brand', e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            value={filters.minPrice || ''}
            onChange={(e) => handleChange('minPrice', Number(e.target.value))}
            placeholder="Min Price"
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <input
            type="number"
            value={filters.maxPrice || ''}
            onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
            placeholder="Max Price"
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fuel Type
        </label>
        <select
          value={filters.fuelType}
          onChange={(e) => handleChange('fuelType', e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {fuelTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Seating Capacity
        </label>
        <select
          value={filters.seatingCapacity}
          onChange={(e) => handleChange('seatingCapacity', Number(e.target.value))}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value={0}>All</option>
          {seatingCapacities.slice(1).map((capacity) => (
            <option key={capacity} value={capacity}>
              {capacity} seats
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}