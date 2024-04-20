import React from 'react'

function HowItWorks() {
  return (
    <div id="working" className='bg-[#1a0624] mt-10 rounded-2xl mx-[10%] flex justify-center items-center flex-wrap'>
        <div className='py-10 '>
            <h1 className='text-4xl font-bold'>How it works ?</h1>
        </div>
        <div id='howitw' className='grid md:grid-cols-2 p-10 gap-10'>
            <div className='flex items-center flex-row'>
            <div className='text-accent p-4 text-4xl font-ubuntu font-bold'>1</div>
                <p className='text-lg'>
                     Start by registering in our Platform. <br /> It's <b>100% FREE !</b>
                </p>
            </div>
            <div className='flex items-center flex-row'>
            <div className='text-accent p-4 text-4xl font-ubuntu font-bold'>2</div>
                <p className='text-lg'>
                 Take a simple quiz to help us figure out <br />your learning problems.
                </p>
            </div>
            <div className='flex items-center flex-row'>
            <div className='text-accent p-4 text-4xl font-ubuntu font-bold'>3</div>
                <p className='text-lg'>
                     Learn different suggested topics. <br /> Enhance your learning attention. 
                </p>
            </div>
            <div className='flex items-center flex-row'>
            <div className='text-accent p-4 text-4xl font-ubuntu font-bold'>4</div>
                <p className='text-lg'>
                     Take exams and training to become a master of topcs. <br />
                     Learning is art and not everyone is an artist.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default HowItWorks