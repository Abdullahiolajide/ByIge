import React from 'react'


const NavbarContainer = ({children}) => {
  return (
   
    <section className={`py-2 md:py-2 md:px-6 px-3`}>
        {/* <section className={`duration-300 ${show ? '-translate-x-[100%]' : "translate-x-0"}`}> */}
        <div className='flex whitespace-nowrap items-center w-full'>
            {children}
            </div>
                
            
    </section>
  )
}

export default NavbarContainer