import React from 'react'

function SubHero() {
  return (
    <div className='mt-16'>
        <h1 className='text-center text-5xl font-bold '>Your <span className='bg-gradient-to-l from-primary to-accent text-transparent bg-clip-text'>Journey</span> Shouldn't End Here</h1>
        <p className='text-center py-5 text-lg'>Follow me on social media and stay tuned on website news </p>
        <div className='social-icons flex flex-row justify-center items-center'>
            <img className='bg-[#060c17] p-4' src="/icons/github.png" alt="" />
            <img className='bg-[#060c17] p-4' src="/icons/facebook.png" alt="" />
            <img className='bg-[#060c17] p-4' src="/icons/instagram.png" alt="" />
            <img className='bg-[#060c17] p-4' src="/icons/linkedin.png" alt="" />
        </div>
    </div>
  )
}

export default SubHero