import { useEffect, useState } from "react";

import { categories } from "../../api/data/products";
import { useDebounce } from "../../hooks/useDebounce";

const ProductListFilters = ({ onChange }) => {
  const [search, setSearch] = useState();
  const debouncedSearch = useDebounce(search);

  const [category, setCategory] = useState();
  const [maxPrice, setMaxPrice] = useState();

  useEffect(() => {
    onChange({ category, maxPrice, search: debouncedSearch });
  }, [category, maxPrice, debouncedSearch]);

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />
      {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select> */}
      {/* <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select> */}
      {/* ------------------------------------------------------ */}

      <div className="max-w-sm mx-auto">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Выбрать Категорию
        </label>
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
          p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option defaultValue>-- категории</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="max-w-sm mx-auto">
        <label
          htmlFor="maxPrice"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Выбрать максимальную цену
        </label>
        <select
          id="maxPrice"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
          p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        >
          <option defaultValue value="1000000000000000000">
            Максимальная Цена
          </option>
          <option value="100">100 ₽</option>
          <option value="250">250 ₽</option>
          <option value="500">500 ₽</option>
          <option value="750">750 ₽</option>
          <option value="1000">1.000 ₽</option>
        </select>
      </div>
    </div>
  );
};

export default ProductListFilters;
