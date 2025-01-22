import Link from "next/link";

import Product from "../Products/Product";
import {  getfourProducts} from "@/sanity/lib/queries";





interface TopPicksProps {
  title?: string;
  showDescription?: boolean;
}


async function Picksforyou({ title = 'Top Picks For You', showDescription = true }: TopPicksProps) {
  // IDs of the products 
  
 const product = await getfourProducts()
    


  return (
    <>
      <div className="h-[777] text-black">

        {/*Content*/}
        <div>
          {/*Title*/}
          <p className="text-[36px] text-center py-[30px]">{title}</p>
             {/* Conditional Description */}
        {showDescription && (
          <p className="text-[16px] text-[#9F9F9F] text-center py-[6px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        )}
        </div>

        {/*Getting 4 Products*/}
        <div className="flex flex-wrap justify-center items-start bg-[#ffffff] gap-[40px]">
        {product.map((products: {
  _id: string;  title: string; imageSrc: string; price: number; 
}) => (
          <Product
            key={products._id}
            id={products._id}
            title={products.title}
            imageSrc={products.imageSrc}

            price={products.price}
          />
        ))}
        </div>

       

        {/*view more link for shop */}

        <div className="text-[24px] underline underline-offset-[16px] text-center font-medium md:py-16">
                <Link href="/Shop">View more</Link>
              </div>
       
      </div>

     

     
    </>
  );
}

export default Picksforyou;
