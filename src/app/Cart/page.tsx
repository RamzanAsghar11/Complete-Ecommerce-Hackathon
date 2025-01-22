"use client"
import React from "react";
import { useCart } from "../Context/CartContext";
import Allpagesmainsection from "../Components/Allpagesmainsection";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Cart = () => {

  const router = useRouter();

  // Example cart items array; replace this with your actual state/props
  const handleCheckout = () => {
    if (!cart || cart.length === 0) {
      alert("Your cart is empty. Please add items to proceed to checkout.");
    } else {
      router.push("/Checkout"); // Checkout page par redirect karein.
    }
  };
  const { cart, removeFromCart, updateCartQuantity } = useCart();

  return (
    <div className="w-full">
      <Allpagesmainsection logo="Cart" logoDescription="Cart" />
      <div className="my-6 py-8 w-full flex flex-col lg:flex-row px-4 md:px-6 2xl:px-24 gap-6">
        <table className="w-full xl:w-[70%]">
          <thead className="bg-[#FFF9E5]">
            <tr className="grid grid-cols-6 items-center py-3 text-xs md:text-xl">
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="grid grid-cols-6 text-xs lg:text-xl items-center text-center py-3">
                <td>
                  <Image
                    width={80}
                    height={80}
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-cover"
                  />
                </td>
                <td className="text-left ">{item.title}</td>
                <td>Rs. {item.price.toLocaleString()}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-6 md:w-12 border text-center rounded"
                    onChange={(e) => {
                      const newQuantity = Math.max(parseInt(e.target.value || "1", 10), 1); 
                      updateCartQuantity(item.id, newQuantity);
                    }}
                  />
                </td>
                <td>Rs. {(item.price * item.quantity).toLocaleString()}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full lg:w-[30%] bg-[#FFF9E5] p-6 px-12 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              Rs.{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString() }
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <span>Total</span>
            <span className="text-xl font-bold ">
              Rs.{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>
          <button
           onClick={handleCheckout}
            className="w-full my-10 py-4  text-black rounded-2xl border-2 border-black"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
