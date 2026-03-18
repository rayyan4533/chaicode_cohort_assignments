import React from 'react'

const App = () => {
  return (
    <>
    <header>
    <img src="public\Mintlify_Main.jpg" alt="blah blah" />
    <nav className='flex items-center text-white justify-between sm:fixed top-5 left-25 right-10  '>
      <div id='Logo Brand div' className='sm:flex flex-row pl-20 items-center pr-10'>
        <img src="https://cdn.brandfetch.io/idUnVg8Dcf/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1770612874657"
        className='scale-[0.6] '
        alt="logo"/>
        <h2 className='text-center text-1xl font-bold'>Mintlify</h2>
      </div>
      <div className='flex gap-10 font-semibold text-1xl pl-20'>
        <a href="">Resources</a>
        <a href="">Documentaions</a>
        <a href="">Blogs</a>
        <a href="">Pricing</a>
      </div>

      <div id='download' className='flex gap-7 pr-80 pl-20'>
        <button className='bg-gray-700 rounded-3xl h-9 p-1 '>contact sales</button>
        
        <button className='bg-white text-black p-1 rounded-3xl'>
          start for free  
        </button>
      </div>
      </nav>
       <section id='main' className='flex flex-col items-center '>
          <div className=' absolute top-40  '>
        <h1 className='text-white text-[58px] text-center font-semibold'>The Intelligent <br />Knowledge Platform </h1>
        
        <h4 className='items-center text-center text-white pt-3'>Helping teams create and maintain world-class <br /> documentation built for both humans and AI</h4>
        
        <form action="" className='mt-8 flex justify-center items-center '>
        <input type="text" className='w-96 rounded-full h-12 opacity-25 bg-gray-400 ml-16 placeholder:text-white pl-5' placeholder='Email Address'></input>
        <button className=' bg-white text-black size-12 w-28 rounded-full relative top-0 right-20  '>click me</button>
        </form>
        <img src="public\hero-image-dark.jpg" alt="" className='object-contain mt-10' />

      </div>
       
      </section>
    </header>
   

    
  
  
  </>
  )
}

export default App