"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname} from "next/navigation";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

{
  /*Using function for hambuger menu*/
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
 


  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle the search bar visibility
  };
  const headerBgColor = pathname === "/" ? "bg-[#FBEBB5]" : "bg-white";

  return (
    <div className={`w-full ${headerBgColor} transition-colors duration-300`}>
      <nav className="h-[100px] w-full flex items-center justify-between px-5 md:px-5 lg:px-16  ">
        {/*Logo*/}
        <div className="md:gap-4">
          <Image
            src="/Assets/Shop_logo.png"
            width={160}
            height={50}
            alt="Logo"
            className="  "
          />
        </div>

        {/* Desktop Navbar links */}
        <ul className="hidden md:flex gap-6 xl:gap-12 xl:text-xl">
          <li className="hover:text-gray-600 cursor-pointer ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer ">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer ">
            <Link href="/Blogs">Blog</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer ">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden items-center md:flex gap-6 xl:gap-12 text-xl xl:text-2xl ">
          <Link href="/Myaccount">
            <TbUserExclamation className="cursor-pointer" />
          </Link>
          <div className="flex items-center gap-4 ">
            <button onClick={handleSearchClick}>
              <FiSearch size={24} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border px-4 py-2 rounded w-36 xl:w-64 "
              />
            )}
          </div>

          <Link href="/Checkout">
            <IoMdHeartEmpty className="cursor-pointer" />
          </Link>
          <Link href="/Cart">
            <AiOutlineShoppingCart className="cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FBEBB5] w-full flex flex-col items-center gap-5 py-5 text-xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/Shop"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-600"
          >
            Shop
          </Link>
          <Link
            href="/Blogs"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-600"
          >
            Blog
          </Link>
          <Link
            href="/Contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-600"
          >
            Contact
          </Link>
          {/*Mobile icons*/}
          <div className="flex gap-5 text-2xl items-center">
            <Link href="/Myaccount">
              <TbUserExclamation className="cursor-pointer" />
            </Link>

            <div className="flex items-center gap-4">
              <button onClick={handleSearchClick}>
                <FiSearch size={24} />
              </button>

              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border px-4 py-2 rounded w-52"
                />
              )}
            </div>
            <Link href="/Checkout">
              <IoMdHeartEmpty />
            </Link>
            <Link href="/Cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
