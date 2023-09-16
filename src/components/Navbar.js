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
      <div className={`flex flex-row justify-${menuOpen ? 'center' : 'end'} items-center md:justify-end md:items-center md:mr-5`}>
        <div className={`flex justify-center items-center md:flex ${menuOpen ? 'flex-row' : 'hidden'} md:space-x-4`}>
          <button className='border-none m-2 font-bold' onClick={() => handleButtonClick('second')}>Home</button>
          <button className='border-none m-2 font-bold' onClick={() => handleButtonClick('main')}>Grid</button>
          <a href="https://www.linkedin.com/in/ayushman-tiwari-a7807b243/">
            <button className='border-none m-2 font-bold'>LinkedIn</button>
          </a>
        </div>

        {menuOpen ? (
          <div className='md:hidden ml-auto'>
            {/* Add ml-auto class to move the button to the right */}
            <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
              <FaTimes />
            </button>
          </div>
        ) : (
          <div className='md:hidden ml-auto'>
            {/* Add ml-auto class to move the button to the right */}
            <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
              <FaBars />
            </button>
          </div>
        )}
      </div>
    </div>
      );
      
}
