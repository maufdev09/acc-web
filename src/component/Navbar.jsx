"use client"
import React from 'react';
import Image from 'next/image';
import logoimg from '@/assets/logoo/logo-blue.png';
import logo2 from '@/assets/logoo/logo2.png';


const Navbar = () => {
    const navbarStyle = {
        border: " 0.5px solid #E4E4E4",
        borderRadius: "20px",
        padding:"0px 20px 0px 20px"

        
      };
    const btnlg = {
        backgroundColor: "#2F7CE3",
        padding:" 0px 20px 0px 20px",
        borderRadius: "20px",
        
      };
    
    return (
        <div className=''>
            <div className="navbar  bg-base-100 font-semibold text-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Request Service</a></li>
        <li><a>Find A Store</a></li>
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <Image height={58} width={136} alt='' src={logoimg}></Image>
      </a>
  </div>
  <div  className="navbar-center   hidden lg:flex">
   <div style={navbarStyle}>
   <ul className="menu menu-horizontal font-bold text-3xl  ">
   <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Request Service</a></li>
        <li><a>Find A Store</a></li>
        <button style={btnlg}>Login</button>
    </ul>
   </div>
  </div>
  <div className="navbar-end">
    <a >      <Image height={58} width={236} alt='' src={logo2}></Image>
</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;