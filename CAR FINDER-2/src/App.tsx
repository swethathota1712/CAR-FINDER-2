import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { CarCard } from './components/CarCard';
import { Filters } from './components/Filters';
import { SearchBar } from './components/SearchBar';
import { SortSelect } from './components/SortSelect';
import { cars } from './lib/mockData';
import { wishlistStorage } from './lib/localStorage';
import type { Car, FilterState } from './types';

const ITEMS_PER_PAGE = 10;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState<Car[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    brand: 'All',
    minPrice: 0,
    maxPrice: 0,
    fuelType: 'All',
    seatingCapacity: 0,
    search: ''
  });

  useEffect(() => {
    setWishlist(wishlistStorage.getWishlist());
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    document.documentElement.classList.toggle('dark');
  };

  const filteredCars = cars
    .filter((car) => {
      const matchesBrand = filters.brand === 'All' || car.brand === filters.brand;
      const matchesFuelType =
        filters.fuelType === 'All' || car.fuelType === filters.fuelType;
      const matchesSeating =
        filters.seatingCapacity === 0 ||
        car.seatingCapacity === filters.seatingCapacity;
      const matchesPrice =
        (!filters.minPrice || car.price >= filters.minPrice) &&
        (!filters.maxPrice || car.price <= filters.maxPrice);
      const matchesSearch =
        !filters.search ||
        `${car.brand} ${car.model}`
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      return (
        matchesBrand &&
        matchesFuelType &&
        matchesSeating &&
        matchesPrice &&
        matchesSearch
      );
    })
    .sort((a, b) => {
      if (sortOrder === 'price_asc') return a.price - b.price;
      if (sortOrder === 'price_desc') return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const updateWishlist = () => {
    setWishlist(wishlistStorage.getWishlist());
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Car Finder
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Filters filters={filters} onFilterChange={setFilters} />
            </div>

            <div className="md:col-span-3 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <SearchBar
                    value={filters.search}
                    onChange={(value) =>
                      setFilters({ ...filters, search: value })
                    }
                  />
                </div>
                <div>
                  <SortSelect value={sortOrder} onChange={setSortOrder} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onWishlistChange={updateWishlist}
                  />
                ))}
              </div>

              {filteredCars.length > ITEMS_PER_PAGE && (
                <div className="flex justify-center space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === index + 1
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}

              {wishlist.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Wishlist
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((car) => (
                      <CarCard
                        key={car.id}
                        car={car}
                        onWishlistChange={updateWishlist}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;