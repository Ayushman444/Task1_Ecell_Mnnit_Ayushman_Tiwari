import React from 'react'
import { SmallSquare } from './SmallSquare';

export const Main = () => {

  const squares = [];

  for (let i = 0; i < 9; i++) {
    squares.push(<SmallSquare key={i} isBlack={i === 8} />);
  }

  return (
    <div class="flex flex-col items-center  flex-wrap md:flex-row md:justify-center md:flex-wrap-reverse lg:flex-wrap lg:flex-row">


        <div class="w-[250px] h-[250px] bg-blue-500 rounded-lg m-4 md:w-[691px] md:h-[337px] md:order-3 lg:w-[385px] lg:h-[385px] lg:order-1"></div>


        <div class="w-[250px] h-[250px] bg-blue-500 rounded-lg m-4 md:w-[337px] md:h-[337px] md:order-1 lg:w-[385px] lg:h-[385px] lg:order-2"></div>


        <div class="flex justify-center items-center w-[250px] h-[250px] bg-gray-200 rounded-lg m-4 md:w-[337px] md:h-[337px] md:order-2 lg:w-[385px] lg:h-[385px] z-10 lg:order-3 relative">
            <div className='grid grid-cols-3 grid-rows-3 bg-gray-200 w-4/5 h-4/5 z-20 absolute'>
                {squares}
            </div>
        </div>

    </div>
  )
}
