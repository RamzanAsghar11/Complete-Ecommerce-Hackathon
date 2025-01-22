"use client";
import { PiCirclesFourFill } from "react-icons/pi";
import Delivery from "../Components/Delivery";
import Image from "next/image";
import Allpagesmainsection from "../Components/Allpagesmainsection";
import Product from "../Products/Product";
import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/sanity/lib/queries";
import { useEffect, useState, useMemo, useCallback } from "react";

type Category = {
  _id: string;
  title: string;
};

type ProductType = {
  _id: string;
  title: string;
  imageSrc: string;
  price: number;
};

const Shop = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]); // For holding all products
 
  const [sortOption, setSortOption] = useState("Default");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<{ [key: string]: ProductType[] }>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
 

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts(); // Fetch all products initially
        setAllProducts(fetchedProducts);
        setProducts(fetchedProducts); // Set all products as the initial list
      } catch (error) {
      
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  // Fetch products by category
  const handleCategoryClick = async (categoryTitle: string) => {
    if (categoryTitle === "All Products") {
      setProducts(allProducts); // Show all products
      setCategoryProducts({});
      setCurrentPage(1); // Reset to page 1
      return;
    }

    // Check if products for this category are already fetched
    if (categoryProducts[categoryTitle]) {
      setProducts(categoryProducts[categoryTitle]); // Use already fetched products
      return;
    }

    try {
      const filteredProducts = await getProductsByCategory(categoryTitle);
      setCategoryProducts((prev) => ({
        ...prev,
        [categoryTitle]: filteredProducts, // Store fetched products by category
      }));
      setProducts(filteredProducts); // Update state with filtered products
      setCurrentPage(1); // Reset to page 1
    } catch (error) {
      
      console.error("Error fetching products by category:", error);
    }
  };

  // Sorting products
  const sortedProducts = useMemo(() => {
    const sorted = [...products]; // Create a copy of products array
    if (sortOption === "Price (Low to High)") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price (High to Low)") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  }, [products, sortOption]);

  // Paginate the products based on currentPage and itemsPerPage
  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [sortedProducts, currentPage, itemsPerPage]); 

  // Updated displayed range for pagination
  const displayedProductsCount = useMemo(() => {
    const totalDisplayed = Math.min(currentPage * itemsPerPage, products.length);
    return totalDisplayed; // Fixes incorrect product count display
  }, [currentPage, itemsPerPage, products.length]); 

  const startIndex = useMemo(() => {
    return (currentPage - 1) * itemsPerPage + 1;
  }, [currentPage, itemsPerPage]);

  // Handle sort
  const handleSort = useCallback((sortOption: string) => {
    setSortOption(sortOption);
    setCurrentPage(1); // Reset page when sorting
  }, []);

  // Handle items per page
  const handleItemsPerPage = useCallback((count: number) => {
    setItemsPerPage(count);
    setCurrentPage(1); // Reset page when items per page changes
  }, []);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* Shop Main page */}
      <Allpagesmainsection />

      {/* Filter and Results */}
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-2 md:justify-between items-center px-4 py-2 md:px-20 h-auto md:h-[100px] bg-[#FAF4F4]">
        <div className="flex gap-2 md:gap-5 items-center font-normal md:text-[20px]">
          <Image
            src="/Assets/Vector.png"
            alt=""
            width={19}
            height={17}
            className="w-[19px] h-[17px]"
          />
          <p>Filters</p>
          <span>
            <PiCirclesFourFill />
          </span>

          {/* Filter products by category functionality */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#FBEBB5] px-4 py-2 rounded-md"
            >
              <Image
                src="/Assets/filter.png"
                alt=""
                width={21}
                height={20}
                className="w-[21px] h-[20px]"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white border rounded-md shadow-lg mt-2 w-48">
                <button
                  onClick={() => {
                    setProducts(allProducts); // Show all products when "All Products" is clicked
                    setCategoryProducts({});
                    setIsDropdownOpen(false); // Close dropdown
                    setCurrentPage(1); // Reset to page 1
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => {
                      handleCategoryClick(category.title);
                      setIsDropdownOpen(false); // Close dropdown after selection
                      setCurrentPage(1); // Reset to page 1
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-l-2 h-8 border-gray-500 mx-4"></div>
          <p>
            Showing {startIndex}–{displayedProductsCount} of {products.length} results
          </p>
        </div>

        {/* Show and Sort By */}
        <div className="flex gap-2 md:gap-6 items-center">
          <p>Show</p>
          <input
            type="number"
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPage(Number(e.target.value))}
            className="w-9 md:w-[55px] px-2 py-3 md:h-[55px] h-7 text-center"
            min={1}
          />
          <p>Sort by</p>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="w-28 md:w-[188px] md:h-[55px] h-7 px-2 py-3"
          >
            <option value="Default">Default</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Title">Title</option>
          </select>
        </div>
      </div>

      {/* All Products */}
      <div className="flex flex-wrap justify-center items-center bg-[#ffffff] px-6 xl:px-10 gap-[50px] mb-10 md:mb-20">
        {currentProducts.length > 0 ? (
          currentProducts.map((product: ProductType) => (
            <Product
              key={product._id}
              id={product._id}
              title={product.title}
              imageSrc={product.imageSrc}
              price={product.price}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}

        {/* Pagination Buttons */}
        <div className="h-[60px] w-full flex justify-center gap-8 mt-6 items-center">
          {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className="w-[60px] h-[60px] bg-[#FBEBB5] flex items-center justify-center"
            >
              {index + 1}
            </button>
          ))}
          <button className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">
            Next
          </button>
        </div>
      </div>

      {/* Delivery Section */}
      <div>
        <Delivery />
      </div>
    </div>
  );
};

export default Shop;
