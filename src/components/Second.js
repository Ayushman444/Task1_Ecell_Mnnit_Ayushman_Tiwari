import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export const Second = () => {
    return (

        <div className="flex flex-col w-[100w] h-[100vh] justify-center items-center bg-gray-200">

            <div className="text-center ">
                <h1 className="text-4xl font-bold">My Profile</h1>
                <div className="bg-violet-400 h-[4px] w-1/5 mx-auto"></div>

                <div className='rounded-md w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10
                    transition-all duration-700 shadow-md hover:drop-shadow-xl'>


                    <div className='flex flex-col md:relative'>
                        <div className='absolute top-[-7rem] z-10 mx-auto'>
                            <img src="https://media.licdn.com/dms/image/D4D03AQEyyXGz1ZcKmw/profile-displayphoto-shrink_800_800/0/1684519031195?e=1700092800&v=beta&t=C3cms6_XzrKqwDXMgR13wMknU5BSKAFggnUNsDdUs8o"
                                className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' />
                            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
             top-[-6px] z-[-10] left-[10px]'></div>
                        </div>

                        <div className='text-center mt-7'>
                            <p className='tracking-wider font-bold text-2xl capitalize'>Ayushman Tiwari</p>
                            <p className='text-violet-300 text-sm uppercase'>About Me</p>
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                            <FaQuoteLeft />
                        </div>

                        <div className='text-center mt-4 text-slate-500 '>
                            Hello I am Ayushman, I am currently a Sophomore pursuing Bachelors of technology in Electrical Engineering at MNNIT Prayagraj . I am from Kanpur , Uttar Pradesh. My Hobbies are playing cricket , programming , playing multiplayer games , listening to music.                         </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                            <FaQuoteRight />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <a href="https://www.instagram.com/ayush__mn/">
                            <button

                                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                                    cursor-pointer rounded-md font-bold px-10 py-2 text-white text-lg'>
                                My Instagram
                            </button>
                        </a>

                    </div>

                </div>

            </div>
        </div>


    )
}
