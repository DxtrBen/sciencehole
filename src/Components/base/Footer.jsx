import React from 'react'

function Footer() {
  return (
    <>
        <div id='hyp-container' className='mx-32 p-5 items-start flex flex-col bg-[#0d0f16] rounded-lg my-10 '>
            <div id="container" className='flex flex-row'>
            <div>
                <div id='footer-logo' className='flex my-3 flex-row justify-start items-center'>
                    <img className='rounded-full' src="/Logo.png" height={'50px'} width={'60px'} alt="" />
                    <h1 className='text-xl font-extrabold'>Sciencehole</h1>
                </div>
                <p className='px-5'>Exploit Ai powers in learning</p>
            </div>
            <div className='my-10 mx-24'>
                <h1 className='font-bold text-[#fff] opacity-50'>Explore</h1>
                   <div className='a-container'>
                        <a href="">Join Us</a>
                        <a href="">Learning Paths</a>
                        <a href="">Coding Lab</a>
                        <a href="">AI Chat</a>
                        <a href="">Dashboard</a>
                        <a href="">Docs</a>
                   </div>
            </div>
            <div className='my-10 mx-24'>
                <h1 className='font-bold text-[#fff] opacity-50'>Technologies</h1>
                <div className='a-container'>
                    <a href=""><img src="/footer/react.png" alt="" />React Js</a>
                    <a href=""><img src="/footer/Vite.png" width={'24px'} alt="" />Vite</a>
                    <a href=""><img src="/footer/tailwind.png" alt="" />Tailwind Css</a>
                    <a href=""><img src="/footer/firebase.png" alt="" />Firebase</a>
                    <a href=""><img src="/footer/analytics.png" alt="" />Analytics</a>
                    <a href=""><img src="/footer/figma.png" alt="" />Figma</a>
                </div>
            </div>
            
            </div>
            <div className='shadow-[0_-1px] p-3 shadow-primary w-full'>
                <h1>Made By <span className='font-bold'>Rayan Benali Amjoud</span></h1>
                <h1>Copyright &copy; 2024 All Rights reserved</h1>
            </div>
        </div>
    </>
  )
}

export default Footer