import React from 'react'
import { FaRegEye, FaRegHeart, FaRegStar } from "react-icons/fa";


function MoviesCard({movie}) {
    
   
  return (
    <div className='font-monts transition-transform  duration-300 hover:scale-110 p-10 '>
        <img src={movie.card_picture} alt={movie.title} 
        className='w-[80%] h-[80%] mx-auto object-contain rounded-lg'
        />
        <div>
            <div className='flex justify-between gap-6 items-center pt-6 space-y-2'>
                <h3>{movie.title}</h3>
                <div className='flex justify-center items-center gap-2'>
                    <FaRegEye className='text-gray-500 ' />
                    <FaRegHeart className='text-rose-500' />

                    </div>
            </div>
        </div>
        <p className='text-sm text-gray-500'>{movie.released_date}</p>
        <div className='flex justify-between items-center'>
            <p className='bg-yellow-500 font-extrabold text-sm text-black rounded px-2 mt-2'>{movie.platform}</p>
            <p className='text-gray-400 flex justify-center items-center text-sm'>
                <FaRegStar className='text-yellow-500' />
                 {movie.rating}
            </p>
        </div>

       
      
    </div>
  )
}

export default MoviesCard
