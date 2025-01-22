
import Allpagesmainsection from '../Components/Allpagesmainsection'
import Delivery from '../Components/Delivery';

const Myaccount = () => {
  return (
    <div className=" w-full h-auto  ">
      <Allpagesmainsection logo='My Account' logoDescription='My account'/>
      

    
      <div className="flex flex-col md:flex-row gap-4 lg:gap-12 2xl:gap-24  w-full px-5 lg:px-4 2xl:px-40 py-8 ">
        {/* Log In Form */}
        <div className="w-full md:w-1/2 px-8 lg:px-10 2xl:px-24 py-6">
          <h2 className="text-4xl font-semibold my-6">Log In</h2>
          <form className="space-y-10">
             {/* Username or email address*/}
            <div >
             
              <label className="block mb-1 my-5">
                Username or email address
              </label>
              <input
                type="text"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Password*/}
            <div>
              <label className="block mb-1 my-5">Password</label>
              <input
                type="password"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>
            {/* Remember me*/}
            <div className="flex items-center">
              <input type="checkbox" className="mr-4 text-[#9F9F9F] w-[27px] h-[30px] " id="rememberMe" />
              <label htmlFor="rememberMe" className="">
                Remember me
              </label>
            </div>

            {/* Login/Lost Your Password*/}
            <div className="flex xl:items-center flex-col xl:flex-row md:justify-between">
              <button
                type="submit"
                className=" py-4 xl:px-20 text-xl border border-[#9F9F9F] rounded-xl hover:bg-blue-600"
              >
                Log In
              </button>
              <a href="#" className=" hover:underline my-4">
                Lost Your Password?
              </a>
            </div>
          </form>
        </div>

        {/*Right side Register Form */}
        <div className="w-full md:w-1/2 px-8 lg:px-10 2xl:px-24 py-6">
          <h2 className="text-4xl font-semibold my-6">Register</h2>
          <form className="space-y-10">
            {/*Email address*/}
            <div>
              <label className="block mb-1 my-5">Email address</label>
              <input
                type="email"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/*Email Details*/}
            <p className=" my-5 text-sm">
              A link to set a new password will be sent to your email  address.
            </p>
            <p className="my-4 text-sm ">
              Your personal data will be used to support your  experience
              throughout this website, to manage access  to your account, and for
              other purposes described in our  
              <span className="font-bold"> privacy policy</span>.
            </p>
             {/*Button*/}

            <button
                type="submit"
                className=" py-4 px-20 text-xl border border-[#9F9F9F] rounded-xl hover:bg-blue-600"
              >
                Register
              </button>
          </form>
        </div>
      </div>
       {/*import Delivery from '../Components/Delivery';*/}

      <div>
          <Delivery/>
        </div>
    






    </div>
  )
}

export default Myaccount;
