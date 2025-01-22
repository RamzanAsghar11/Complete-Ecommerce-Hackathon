
"use client"
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";





interface ProductProps {
  title: string;
  imageSrc: string;
  price: number;
  description: string;
  size: string[]; // Array of sizes (e.g., ["XL", "L", "SM"])
  colors: string[]; // Array of color codes (e.g., ["#000000", "#816DFA"])
  sku: string;
  category: string;
  tags: string[];
}




const Mainproduct: React.FC<ProductProps>  = ({
  title,
  imageSrc,
  price,
  description,
  size,
  colors,
  sku,
  category,
  tags,
}) => {

  const { addToCart } = useCart();
  const router = useRouter();

  const [localQuantity, setLocalQuantity] = useState(1);
  const handleIncrement = () => {
    setLocalQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if ( localQuantity > 1) {
      setLocalQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: title, // Unique ID for product
      title,
      price,
      quantity: localQuantity,
      imageSrc,
    });
    router.push("/Cart"); // Navigate to Cart page
  };


  
 
  return (
    
    <div className="w-full px-2 md:px-10 ">
      {/* top section */}
      <div className="w-full h-[100px] flex items-center  ">
        <div className=" flex items-center gap-2 md:gap-10 border-r-4 text-[#9F9F9F] border-[#9F9F9F] px-10 py-3 ">
          <Link href="/">Home</Link>
          <span className="text-black">
            <FaChevronRight />
          </span>
          <Link href="/Shop">Shop</Link>
          <span className="text-black">
            <FaChevronRight />
          </span>{" "}
        </div>
        <div className="font-medium pl-6 ">{title}</div>
      </div>

      {/* main section */}

      <div className="w-full flex flex-col md:flex-row h-auto  justify-center md:gap-5 lg:gap-20 px-4 lg:px-10 border-[#9F9F9F] border-b-2">
        {/* Left section main side image and main imgae */}
        <div className="w-full md:w-1/2 flex h-[500px] gap-5 py-4">
          {/* left images */}
          <div className="flex flex-col w-[77px] h-[416px] gap-6">
            <div className="w-[77px] h-[115px] bg-[#FFF9E5] rounded-2xl flex justify-center items-center">
              <Image
                src="/Assets/Image 34.png"
                width={77}
                height={115}
                alt="Image"
              />
            </div>
            <div className="w-[77px] h-[115px] bg-[#FFF9E5] rounded-2xl flex justify-center items-center">
              <Image
                src="/Assets/Image 35.png"
                width={77}
                height={115}
                alt="Image"
              />
            </div>
            <div className="w-[77px] h-[115px] bg-[#FFF9E5] rounded-2xl flex justify-center items-center">
              <Image
                src="/Assets/Image 36.png"
                width={56}
                height={100}
                alt="Image"
              />
            </div>
            <div className="w-[77px] h-[115px] bg-[#FFF9E5] rounded-2xl flex justify-center items-center">
              <Image
                src="/Assets/Image 37.png"
                width={77}
                height={115}
                alt="Image"
              />
            </div>
          </div>
          {/* Right main image */}
          <div className="bg-[#FFF9E5] h-full flex justify-center items-center w-[80%] ">
            <Image
              src={imageSrc}
              width={481}
              height={391}
              alt="Main product"
            />
          </div>
        </div>

        {/* Right section product details*/}
        <div className="h-full w-full md:w-1/2 py-4">
          <p className="font-normal text-[42px] mb-3 ">{title}</p>
          <p className="text-[#9F9F9F] font-medium">Rs. {price}</p>

          <div className="flex items-center  ">
            <div className="flex gap-2 text-[#FFDA5B] pr-4 py-2 border-r-2 border-[#9F9F9F] ">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>
            <div className="text-[#9F9F9F] text-xs px-4 py-2">
              5 Customer Review
            </div>
          </div>
          <p className=" w-[424px] pr-5 my-5">
          {description}
          </p>
          <p className="text-[#9F9F9F] mt-3">Size</p>

          <div className="flex gap-5 my-5">
            {size?.map((s, index) => (
              <div
                key={index}
                className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-[#FBEBB5] rounded-lg flex justify-center items-center"
              >
                {s}
              </div>
            ))}
          </div>
          <p className="text-[#9F9F9F] mt-3">Colour</p>

          <div className="flex gap-5 my-5">
  {colors?.length > 0 ? (
    colors.map((color, index) => (
      <div
        key={index}
        style={{ backgroundColor: color }}
        className="w-[30px] h-[30px] rounded-full"
      ></div>
    ))
  ) : (
    <p>No colors available</p>
  )}
</div>

          <div className="flex gap-5">
            <div className="flex justify-center items-center border-2 border-[#9F9F9F] rounded-lg py-4 px-3 gap-7 ">
            <button onClick={handleDecrement} className="text-xl">
            -
          </button>

              {/* Display the dynamic quantity */}
    <span>{localQuantity}</span>
              <button onClick={handleIncrement} className="text-xl">
            +
          </button>
            </div>
            <button  onClick={handleAddToCart} className=" text-black py-4 px-10 flex justify-center items-center border-black rounded-2xl border-2" >
              Add to Cart
            </button>
          </div>

          <hr className=" mt-20 w-full border-t-2 border-gray-300" />

          <div className="flex  gap-6 text-[#9F9F9F] my-10">
            <div className="w-[75px] flex flex-col gap-5">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>

            <div className="flex flex-col gap-5">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>

            <div className="flex flex-col gap-5">
              <p>{sku}</p>
              <p>{category || "No category available"}</p>
              <p>
    {tags?.length > 0 ? (
      tags.map((tag, index) => (
        <span
          key={index}
          className=" text-[#9F9F9F] px-2 py-1 rounded-md text-sm mr-2"
        >
          {tag}
        </span>
      ))
    ) : (
      <span>No tags available</span>
    )}
  </p>
              <div className="flex gap-4 text-black items-center">
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaLinkedin />
                </span>{" "}
                <span>
                  <FaTwitterSquare />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    </div>
    
  );
};

export default Mainproduct;
