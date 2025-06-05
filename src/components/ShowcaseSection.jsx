import React from 'react'
import { TbWorldHeart } from 'react-icons/tb'

const ShowcaseSection = () => {
  return (
    <div>
        <section className='md:grid grid-cols-5'>
            <div className='col-span-2 -z-50 '>
                {/* card 1 */}
                <div className='m-2 rounded-md overflow-hidden relative h-64'>
                    <img src="https://res.cloudinary.com/dsr9rtryb/image/upload/v1748886659/jy3vo0zqpk48cm7kf6fu.jpg" alt="" className=' w-full h-full object-cover absolute -z-50'/>

                <div className='absolute -z-50 backdrop-blur-xl w-full h-full'></div>

                    <div className='text-white p-4 h-full flex flex-col justify-between'>
                        <p className='text-lg p-2 bg-gray-200/40 rounded-md w-fit'><TbWorldHeart /></p>

                       <div>
                         <h1 className='text-3xl'>Explore more to get your comfot zone</h1>
                        <p className='mt-1'>Book your perfect stay with us</p>
                       </div>
                        <button className='cursor-pointer bg-white rounded text-black px-3 py-2 font-medium w-fit'>Booking Now</button>
                    </div>
                </div>
                {/* card 1 end */}

                {/* card 2 */}
                <div className='m-2 rounded-md overflow-hidden relative h-64'>
                
                    <img src="https://res.cloudinary.com/dsr9rtryb/image/upload/v1699517363/samples/landscapes/nature-mountains.jpg" alt="" className=' w-full h-full object-cover absolute -z-50'/>

                        <div className='absolute -z-50 bg-black/50 w-full h-full'></div>

                    <div className='text-white h-full flex flex-col flex-col-reverse p-6'>
                        <div className='font-medium'>
                            <p>Article Available</p>
                            <p className='text-4xl'>78</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* card 2 end */}

            <div className='col-span-3 -z-50 pb-4 h-84 md:h-full'>
               <div className='m-2 rounded-md overflow-hidden relative h-full'>
                
                    <img src="https://res.cloudinary.com/dsr9rtryb/image/upload/v1732381581/wiyyayccaav7qniswzpn.jpg" alt="" className=' w-full h-full object-cover absolute -z-50'/>
                        <div className='absolute -z-50 bg-black/50 w-full h-full'></div>
                    <div className='text-white text-center h-full flex items-center justify-center text-2xl'>
                        <h1 className='max-w-sm'>Beyond acoomodation, creating memories of a lifetime</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ShowcaseSection