import React from 'react'
import { SmallSquare } from './SmallSquare';
import { useState } from 'react';

export const Main = () => {

  const shadowStyle = {
    boxShadow: 'inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
  };

  const [clickedSquares, setClickedSquares] = useState(Array(9).fill(false));
  const [resetSquares, setSquares] = useState(false);

  const handleSquareClick = (index) => {
    if (resetSquares) {
      
      setClickedSquares(Array(9).fill(false));
      setSquares(false);
      return;
    }

    
    const updatedClickedSquares = [...clickedSquares];
    updatedClickedSquares[index] = true;
    setClickedSquares(updatedClickedSquares);

    if (index === 8) {
      setSquares(true);
      const timer = setInterval(() => {
        const redIndex = updatedClickedSquares.indexOf(true);
        if (redIndex !== -1) {
          updatedClickedSquares[redIndex] = false;
          setClickedSquares([...updatedClickedSquares]);
        } else {
          clearInterval(timer);
          setSquares(false);
        }
      }, 1000); 
    }
  };

  const squares = clickedSquares.map((isRed, i) => (
    <SmallSquare
      key={i}
      isRed={isRed}
      onClick={() => handleSquareClick(i)}
    />
  ));


  return (
    <div className="flex flex-col items-center  flex-wrap md:flex-row md:justify-center md:flex-wrap-reverse lg:flex-wrap lg:flex-row">


        <div className="shadow-lg shadow-gray-400 order-3 w-[250px] h-[250px] bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg m-4 md:w-[691px] md:h-[337px] md:order-3 lg:w-[385px] lg:h-[385px] lg:order-1 ">
        

        </div>


        <div className="order-2 w-[250px] h-[250px] bg-blue-500 rounded-lg m-4 md:w-[337px] md:h-[337px] md:order-1 lg:w-[385px] lg:h-[385px] lg:order-2">
          <img 
          src="https://media.licdn.com/dms/image/C4D0BAQGSZ83BceB4vQ/company-logo_200_200/0/1615316170379?e=2147483647&v=beta&t=m26D4D2oR3OBmRZ7LdYofoRg76vKwViHPunS7c4S2-k" 
          alt=""
          className='w-full h-full rounded-lg border-solid border-2 border-black' />
        </div>


        <div className="order-1 flex justify-center items-center w-[250px] h-[250px] bg-gray-200 rounded-lg m-4 md:w-[337px] md:h-[337px] md:order-2 lg:w-[385px] lg:h-[385px] z-10 lg:order-3 relative"
        style={shadowStyle}
        >
            <div className='grid grid-cols-3 grid-rows-3 bg-gray-200 w-4/5 h-4/5 z-20 absolute'>
                {squares}
            </div>
        </div>

    </div>
  )
}
