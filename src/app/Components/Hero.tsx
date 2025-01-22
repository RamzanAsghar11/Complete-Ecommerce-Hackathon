import Link from "next/link";
import Image from "next/image";
import { getProductById } from "@/sanity/lib/queries";


const Hero = async () => {
  const productId = "6995ce2e-2214-40ca-ac61-c457bff96756"; 
  const product = await getProductById(productId);

   
  
    if (!product) return <div>Product not found</div>;
  return (
    <div  className="w-full">
      {/*Main Hero Section*/}
      <div
        className="h-auto lg:h-[900px] w-full flex flex-wrap justify-center items-center py-4
       bg-[#FBEBB5] "
      >
        <div className="flex items-center  h-auto md:w-1/2 justify-end">
          {/*Left section*/}
          <div className="text-center md:text-left md:px-12 lg:px-1">
            {/*Product Name*/}
            <h1 className="text-[#000000] text-[64px]">
              Rocket single <br />
              seater
            </h1>
            <Link href={`/Products/${product._id}`}>
              <button className="text-[#000000] text-[24px] border-b-[2px] inline  border-[#000000] ">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        {/*Right Section Sofa image*/}
        <div className="  md:w-1/2 flex items-center justify-start ">
          <Image
            src={product.imageSrc}
            alt={product.title}
            width={853}
            height={900}
            className="w-[853px] md:h-[900px] object-contain scale-x-[-1]"
          />
        </div>
      </div>

      {/*Middle Section*/}

      <div className="w-full h-auto py-8 xl:h-[672px] bg-[#FAF4F4] flex flex-col lg:flex-row justify-end items-center px-10 xl:px-20 ">

        {/*Left Side table image*/}
        <div className="w-full lg:w-1/2 h-auto  flex flex-col   items-center px-10   ">
          <div className="w-[380px] h-[300px] lg:h-[300px] lg:w-[400px]">
            <Image
              src="/Assets/Image 2.png"
              alt="Image"
              width={380}
              height={300}
              className="w-[400px] h-[300px] lg:h-[300px] lg:w-[400px]"
            />
          </div>
          <div className="flex flex-col gap-7 w-full text-left mt-6 ">
            <p className="font-medium text-4xl ">Side Table</p>
            <Link href="/Shop">
            <button className="text-[24px] underline underline-offset-[16px]  font-medium ">
              View more
            </button>
            </Link>
          </div>
        </div>
        {/*Right side sofa image*/}

        <div className="w-full lg:w-1/2 h-auto flex flex-col items-center  px-10    ">
          <div className="w-[380px] h-[300px] lg:h-[300px] lg:w-[400px]">
            <Image
              src="/Assets/Image-2.png"
              alt="Image"
              width={380}
              height={300}
              className="w-[400px] h-[300px] lg:h-[300px] lg:w-[400px]"
            />
          </div>
          <div className="w-full flex flex-col text-left gap-7 mt-6 ">
            <p className="font-medium text-4xl ">Sofa</p>
            <Link href="/Shop">
            <button className="text-[24px] underline underline-offset-[16px]  font-medium ">
              View more
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
