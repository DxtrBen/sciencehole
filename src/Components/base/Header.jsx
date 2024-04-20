import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 w-full flex flex-row justify-between items-center px-3 shadow-[0_0_2px] z-20 bg-[#06091079] backdrop-blur-md shadow-text'>
        <div id='logo' className='flex flex-row justify-center items-center'>
            <img className='rounded-full' src="/Logo.png" height={'50px'} width={'60px'} alt="" />
            <h1 className='text-xl font-extrabold'>Sciencehole</h1>
        </div>
        <nav className='normal-nav'>
            <a href="">About</a>
            <a href="#features">Features</a>
            <a href="#working">How it works</a>
            <a href="#price">Price ?</a>
        </nav>
        {/* Offcanva navigation */}
    
        <nav className="sidebar-navBar">
            <input type="checkbox" id="sidebar-active" />
            <label htmlFor="sidebar-active" className="open-sidebar-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>
            <label id="overlay" htmlFor="sidebar-active"></label>
            <div className="links-container">
                <label htmlFor="sidebar-active" className="close-sidebar-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </label>
                <a href="">About</a>
                <a href="">Features</a>
                <a href="">How it works</a>
                <a href="">Contact</a>
            </div>
        </nav>
    </header>
  )
}

export default Header