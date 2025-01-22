import Link from "next/link";

const Footer = () => {
    return (
      <>
        <div className=" ">
          <div className="flex flex-col md:flex-row md:justify-around h-auto md:h-[555px] gap-9 w-full p-6 md:p-12">
            {/* Address Section */}
            <div className="flex items-center md:px-14 mb-8 md:mb-0 justify-center ">
              <a className="text-[16px] text-[#9F9F9F] text-center md:text-left" href="">
                400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
              </a>
            </div>
  
            {/* Links Section */}
            <div className="grid mb-8 md:mb-0">
              <p className="text-[#9F9F9F] py-[10px] md:py-[20px] font-bold">
                Links
              </p>
              <Link href="/">
              <p className="cursor-pointer py-[5px] md:py-[10px]" >Home</p>
              </Link>
              <Link href="/Shop">
              <p className="cursor-pointer py-[5px] md:py-[10px]">Shop</p>
              </Link>
              <Link href="">
              <p className="cursor-pointer py-[5px] md:py-[10px]" >About</p>
              </Link>
              <Link href="/Contact">
              <p className="cursor-pointer py-[5px] md:py-[10px]" >Contact</p>
              </Link>
            </div>
  
            {/* Help Section */}
            <div className="grid mb-8 md:mb-0">
              <a className="text-[#9F9F9F] py-[10px] md:py-[20px] font-bold" href="">
                Help
              </a>
              <a className="py-[5px] md:py-[10px]" href="">Payment Options</a>
              <a className="py-[5px] md:py-[10px]" href="">Returns</a>
              <a className="py-[5px] md:py-[10px]" href="">Privacy Policies</a>
            </div>
  
            {/* Newsletter Section */}
            <div className="grid grid-rows-4 ">
              <a className="text-[#9F9F9F] py-[10px] md:py-[20px] font-bold" href="">
                Newsletter
              </a>
              <div className="flex flex-col gap-3 items-center md:flex-row my-[10px] md:my-[20px]">
                <input
                  type="email"
                  className="w-full md:h-11 px-4 py-2 border-b-2 rounded-t-md md:rounded-l-md md:rounded-t-none border-b-black "
                  placeholder="Enter Your Email Address"
                />
                <button className="border-b-2 text-black border-b-black px-4 py-2 rounded-b-md md:rounded-r-md font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mx-4 md:mx-[140px] pt-[20px] ">
            <hr />
            <p className="text-[14px] md:text-[16px] my-[20px] text-center md:text-left">
              2022 Meubel House. All rights reserved.
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  