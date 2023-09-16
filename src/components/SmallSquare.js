import React from 'react'

export const SmallSquare = (props) => {
    const Clr = props.isBlack ? 'bg-red-800' : 'bg-blue-900';
  return (
    
    <div className={`w-8/9 h-8/9 ${Clr} rounded-lg m-1`}></div>
    

    
  )
}
