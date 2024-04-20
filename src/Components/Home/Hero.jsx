import React from 'react'

function Hero() {
  return (
    <div id='Hero' className='flex flex-row justify-between pt-[2%] px-[40px] lg:px-[120px]'>
      <div className='py-[7%] '>
      <h1 className='text-5xl title font-extrabold py-2'>EASY LEARNING</h1>
      <h1 className='text-5xl title font-extrabold py-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>INTERACTIVE</h1>
      <h1 className='text-5xl title font-extrabold pb-10 pt-2'>AI POWERED</h1>
      <p className='leading-loose'>
        Is learning difficult for you? ? <br></br>        
        Try our interactive AI-powered platform.      
      </p>
      <div>
        <button className='transition hover:-translate-y-1 py-2 px-8 ml-2  mt-8 bg-[#80169350] text-[#fff] rounded '>
          Visit my Github
        </button>
        <button className='transition hover:-translate-y-1 py-2  px-8 mx-3 shadow-[0_0_70px] hover:shadow-primary mt-8 bg-primary rounded text-background'>Get Started For <b>FREE!</b></button>
      </div>
      </div>
      <img id='illsutration' className='opacity-80 w-[500px]' src="/heroIllustration.png" alt="illus" />

    </div>
  )
}

export default Hero