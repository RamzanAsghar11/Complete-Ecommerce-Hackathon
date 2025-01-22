import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: string;
  title: string;
  imageSrc: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  title = "Trenton modular sofa",
  imageSrc = "/Assets/Image 4.png",
  price = 25000.0,
}: ProductProps) => {
  return (
    <Link href={`/Products/${id}`}>
      <div className="w-[287px] flex flex-col items-center justify-center cursor-pointer">
        <div className="w-[287px] h-[287px] flex justify-center items-center mb-8">
          <Image src={imageSrc} alt={title} width={287} height={287} className="object-cover" loading="lazy" />
        </div>
        <div className="pr-20 space-y-4">
          <p className="text-[16px]">{title}</p>
          <p className="font-semibold text-[24px] tracking-wider">
            {price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;




