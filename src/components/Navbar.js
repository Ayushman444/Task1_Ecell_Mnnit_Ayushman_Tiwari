import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';



export const Navbar = ({onSelectComponent}) => {

    const [selectedComponent, setSelectedComponent] = useState('main');

    const handleButtonClick = (componentName) => {
      setSelectedComponent(componentName);
      onSelectComponent(componentName);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='border-b-4 border-gray-300'>
          <div className='flex flex-row justify-end items-center mr-5'>
            {menuOpen ? (
              <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
                  <FaTimes />
                </button>
              </div>
            ) : (
              <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
                  <FaBars />
                </button>
              </div>
            )}
            <div className={`md:flex ${menuOpen ? 'flex flex-col' : 'hidden'} md:space-x-4`}>
              <button className='border-none m-2 font-bold' onClick={()=>handleButtonClick('second')}>Home</button>
              <button className='border-none m-2 font-bold' onClick={()=>handleButtonClick('main')}>Grid</button>
              <a href="https://www.linkedin.com/in/ayushman-tiwari-a7807b243/">
              <button className='border-none m-2 font-bold' >LinkedIn</button>
              </a>
              
            </div>
          </div>
        </div>
      );
      
}
