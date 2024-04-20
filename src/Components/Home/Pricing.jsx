import React from 'react'

function Pricing() {
  return (
    <div id='price' className='text-lg'>
        <h1 className='text-center text-4xl font-extrabold mt-24'>Plans & Pricing</h1>
        <p className='text-center m-2'>Take the chance it's <b>100% FREE! for a whole year</b></p>
        <div id='prices' className='flex flex-row justify-center items-center'>
            <div className='px-12 py-5 m-8 rounded-lg bg-[#060c17]'>
                <h1 className='text-2xl text-center font-extrabold py-5'>BASIC</h1>
                <h2 className='text-center'>FREE</h2>
                <ul className='py-10'>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Interactive Lessons</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Interactive Exercices</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Unlimited Access</li>
                    <li><img className='inline p-2' src="/no.png" alt="" />Tounaments</li>
                    <li><img className='inline p-2' src="/no.png" alt="" />AI acess</li>
                    <li><img className='inline p-2' src="/no.png" alt="" />Unlimited Training</li>
                </ul>
                <button className='bg-[#010309bb] transition hover:-translate-y-1 p-2 rounded-lg w-[100%] mb-2'>
                    Enroll Now
                </button>
            </div>
            <div className='bg-[#61a3ff48] rounded-lg px-12 py-5 m-8'>
                <div className='flex flex-row justify-center items-center'>
                    <img src="/recomend.png" className='px-3 ' alt="" />
                    <p className='text-center text-sm text-primary'>Highly Recomanded</p>
                </div>
                <h1 className='text-2xl font-extrabold text-center py-5'>PRO</h1>
                <h2 className='text-center'><del className='text-[#ffffff8a]'>$20.00</del> $0.00/ Month</h2>
                <ul className='py-10'>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Interactive Lessons</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Interactive Exercices</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Unlimited Access</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Tounaments</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />AI acess</li>
                    <li><img className='inline p-2' src="/no.png" alt="" />Unlimited Training</li>
                </ul>
                <button className='bg-primary font-bold transition hover:-translate-y-1 hover:shadow-[0_0_70px] hover:shadow-primary p-2 rounded-lg w-[100%] mb-2'>
                    Enroll Now
                </button>
            </div>
            <div className='bg-[#7d169242] rounded-lg px-12 py-5 m-8'>
                <h1 className='text-2xl text-center font-extrabold py-5'>ULTIMATE</h1>
                <h2><del className='text-[#ffffff8a]'>$50.00</del> $0.00 / Month</h2>
                <ul className='py-10'>
                    <li><img className='inline p-2' src="/ok.png" alt="" /> Interactive Lessons</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Interactive Exercices</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Unlimited Access</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Tounaments</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />AI acess</li>
                    <li><img className='inline p-2' src="/ok.png" alt="" />Unlimited Training</li>
                </ul>
                <button className='bg-[#7d169288] transition hover:-translate-y-1 hover:shadow-background hover:shadow-[0_0_50px] p-2 rounded-lg w-[100%] mb-2'>
                    Enroll Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Pricing