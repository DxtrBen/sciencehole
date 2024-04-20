import React from 'react'

function Features() {
  return (
    <>
    <h1 id='features' className='text-center text-4xl font-extrabold mt-20'>Why Sciencehole ?</h1>
    <div  className='features flex mt-5 flex-wrap justify-center items-center flex-row '>
        <div className='card'>
            <img src="/interactive.png" width={"100%"} alt="" />
            <h1 className='mb-5 text-3xl font-bold pt-3'>Interacivity</h1>
            <p>
                Interactive Learning step by step. <br></br>
                We provide the right algorithms that will help you to learn.
            </p>
        </div>

        <div className='card'>
            <img src="/simplicity.png" width={'100%'} alt="" />
            <h1 className='mb-5 text-3xl font-bold pt-3'>Simplicity</h1>
            <p>
                Our Platform is simple to use. <br></br>
                Only a few click to get started plus easy access.
            </p>
        </div>

        <div className='card'>
            <img src="/ai-powered.png" alt="" />
            <h1 className='mb-5 text-2xl pt-3'>AI-Powered</h1>
            <p>
                We count on highly trained AI. <br />
                You can trust them as digital teachers.
            </p>
        </div>

        <div className='card'>
            <img src="/challenge.png" alt="" />
            <h1 className='mb-5 text-3xl font-bold pt-3'>Challenges</h1>
            <p>
                Seasonal Organized tournaments. <br></br>
                We organize Tounaments for our users to get prizes.
            </p>
        </div>

        <div className='card'>
            <img src="/progress.png" alt="" />
            <h1 className='mb-5 text-3xl font-bold pt-3'>Progress Track</h1>
            <p>
                We Track you Learning Levels.<br></br>
                We detect your vulnerabilities and give you a proper training.
            </p>
        </div>
    </div>
    </>
  )
}

export default Features