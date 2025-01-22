import React from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";



interface CartSidebarProps {
    isOpen: boolean;
    closeCart: () => void;
  }
  const CartSidebar = ({ isOpen, closeCart }: CartSidebarProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={closeCart} className="text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4 border-b pb-4 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
            <Image
              src="/Assets/Image 8.png"
              alt="Product"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Asgaard Sofa</p>
            <p className="text-gray-600 text-sm">Rs. 250,000.00</p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">Rs. 250,000.00</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
