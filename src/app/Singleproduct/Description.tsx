import React from 'react'
import Image from 'next/image'

const Description = () => {
  return (
    <div className='w-full h-auto lg:h-[744px] lg:px-32 px-5  '>

      {/* Details */}
      <div className='w-full h-auto md:px-24    '>
      <div className='flex justify-center gap-4 md:gap-11  text-xl md:text-2xl py-11  '>
        <div >Description</div>
        <div className='text-[#9F9F9F]'>Additional Information</div>
        <div className='text-[#9F9F9F]'>Reviews  [5] </div>
      </div>
      <div className='mb-7 text-[#9F9F9F]'>
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </div>
      <div className='text-[#9F9F9F]'>
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </div>
      </div>

      {/* 2 Sofa images */}

      <div className='w-full h-auto md:h-[348px] flex flex-col md:flex-row gap-6 py-6 md:py-10 '>
        <div className='flex justify-center items-center bg-[#FFF9E5] '>
          <Image
           src="/Assets/Image 38.png"
           width={828}
           height={551}
           alt='sofa'
          />
        </div>

        <div className='flex justify-center items-center bg-[#FFF9E5] '>
          <Image
           src="/Assets/Image 39.png"
           width={828}
           height={551}
           alt='sofa'
          />
        </div>

      </div>


      
    </div>
  )
}

export default Description

