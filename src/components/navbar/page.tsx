import React from 'react'

const navbar = () => {
  return (
    <div className='bg-[#050505] text-white sm:h-10'>


      <nav className='flex sm:flex-row  justify-between  sm:p-4 sm:pt-4 
       border-b-blue-200 rounded-3xl  mx-auto '>

        {/*  */}
        {/* Left Logo */}
        <div className='  flex flex-row gap-2.5 p-4  '>
          <img
            src="https://cdn.brandfetch.io/ideKwS9dxx/w/800/h/199/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1770370970888"
            alt="image" />
        </div>
        {/* Left logo ends */}

        {/* navlinks */}
        <div id='Nav-Links' className='align-baseline flex flex-row justify-between gap-10 items-center p-2.5 text-2xl'>
          <a href="">Features</a>
          <a href="">Enterprise</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </div>
        {/* navlinks enf */}

        {/* right links */}
        <div className='flex flex-row gap-3.5 border  justify-between  items-center'>
          <button className=' rounded-2xl border border-1 border-amber-50 h-11 w-22 text-white'>Login</button>
          <button className='text-black bg-amber-50 h-11 w-19 rounded-2xl'>Download</button>
        </div>
      </nav>

    </div>
  )
}

export default navbar