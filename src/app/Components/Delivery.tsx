

const Delivery = () => {
  return (
    <div>
      <div className="w-full h-auto md:h-[300px] bg-[#FAF4F4] flex flex-col md:flex-row justify-center gap-6 items-center">
          <div className="w-[376px] flex flex-col text-center p-9 ">
            <p className="font-medium text-[32px] leading-snug">Free Delivery</p>
            <p className="text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
            
          </div>
          <div className="w-[376px] flex flex-col text-center p-9">
          <p className="font-medium text-[32px] leading-snug">90 Days Return</p>
          <p className="text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="w-[376px] flex flex-col text-center p-9">
          <p className="font-medium text-[32px] leading-snug">Secure Payment</p>
          <p className="text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
    </div>
  )
}

export default Delivery
