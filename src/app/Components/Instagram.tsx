import Link from "next/link";



function About() {
    return (
      <>
        <div className="w-full h-[450px] relative">
          {/* Background image */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/Assets/Image%2012.jpg')] bg-cover bg-center"></div>
  
          
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
  
          {/* Content */}
          <div className="relative flex justify-center items-center h-full">
            <div className="w-[454px] m-auto">
              <p className="text-[60px] font-bold my-[20px] text-center text-black">
                Our Instagram
              </p>
              <p className="text-[20px] text-center text-black">
                Follow our store on Instagram
              </p>
              <div className="flex justify-center my-[10px]">
                {/* Follow us button */}
                <Link href="/Contact">
                <button className="w-[255px] h-[65px] text-[20px] bg-[#fff] rounded-[50px] text-black shadow-lg">
                Follow Us
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default About;
  