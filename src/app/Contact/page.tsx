


import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

import Allpagesmainsection from "../Components/Allpagesmainsection";
import Delivery from "../Components/Delivery";

const Contact = () => {
  return (
    <div className='w-full'>
     
      {/* Main contact page */}
      <Allpagesmainsection logo="Contact" logoDescription="Contact"/>
      {/*Heading and description*/}
      <h1 className='font-semibold text-4xl leading-tight text-center mb-8 px-5'>Get In Touch With Us</h1>
      <p className='text-[#9F9F9F] text-center font-normal leading-6 px-2'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br /> Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>


 {/* Main content */}

      <div className='px-9 lg:px-[60px] xl:px-[250px]  flex flex-col md:flex-row  justify-center'>

        {/* Left side details */}
        <div className='w-full md:w-1/2 flex flex-col gap-20 px-8 lg:px-28 my-6 py-20 '>
          <div>
            {/* Address */}
            <div className='flex gap-7 items-center'>
            <span><FaLocationDot /></span>
            <p className='font-medium text-2xl leading-9'>Address </p>
            </div>
            <p className='leading-6 px-10' >236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div>
             {/* Phone */}
            <div className='flex gap-7 items-center'>
            <span><FaPhoneAlt /></span>
            <p className='font-medium text-2xl leading-9'> Phone </p>
            </div>
            <p className='leading-6 px-10'> Mobile: +(84) 546-6789 </p>
            <p className='leading-6 px-10'> Hotline: +(84) 456-6789 </p>
          </div>
          <div >
             {/*Working time */}
            <div className='flex gap-7 items-center'>
            <span><FaClock /></span>
            <p className='font-medium text-2xl leading-9'> Working Time </p>
            </div>
            <p className='leading-6 px-10'>Monday-Friday: 9:00 - 22:00</p>
            <p className='leading-6 px-10'>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

    {/* Right side form */}

        <div className="container w-full md:w-1/2 my-6 py-20">
      <form className="flex flex-col gap-10">
         {/* Your name*/}

        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-5">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder='Abc'
            className=" h-auto md:h-[75px] border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
         {/*Email Address */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-5">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder='abc@def.com'
            className=" h-auto md:h-[75px] border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
         {/* Subject */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-5">
            Subject
          </label>
          <input
            type="text"
            id="name"
            placeholder='This is an optional'
            className=" h-auto md:h-[75px] border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
         {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-bold mb-5">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hi! I'd like to ask about"
            className=" h-auto md:h-[125px] border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> 
        <div >
           {/* Button */}
        <button
          type="submit"
          className="  text-center hover:bg-blue-700 text-black  py-2 px-14 rounded-2xl focus:outline-none focus-shadow-outline border border-black"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
      </div>
       
    {/*import Delivery from "../Components/Delivery";*/}
      
      <div>
       <Delivery/> 
      </div>
      

    </div>
  );
};

export default Contact;








