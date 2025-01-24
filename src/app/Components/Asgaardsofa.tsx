

import { getProductById } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";


const Asgaardsofa = async () => {
 
const productId = "632f7d58-b403-4174-9a25-37705fa69ef7"; 
  const product = await getProductById(productId);
  return (
    <>
    

     
      {/*Sofa Image*/}

      <div  className=" h-auto w-full md:flex-row flex flex-wrap bg-[#FFF9E5] items-center justify-center gap-6 py-8 my-12">
            <div className="flex justify-center items-start">
            <Image src={product.imageSrc} alt={product.title}  width={600}
                  height={450} className="2xl:w-[983px] md:w-[600px] md:h-[450px] 2xl:h-[700px]"/>
            </div>

            {/*Content*/}

          <div className="text-center flex flex-col items-center lg:px-7 space-y-4">
            <p className="font-medium text-2xl "></p>
            <p className="font-bold text-3xl md:text-5xl ">Asgaard Sofa</p>
            <div className="w-[255px] h-[64px] font-normal border border-black flex items-center justify-center " >
           <Link href={`/Products/${product._id}`}>
           <button>
             Order Now
           </button>
         </Link>
            </div>
          </div>

      </div>

     
    </>
  );
}
export default Asgaardsofa;

