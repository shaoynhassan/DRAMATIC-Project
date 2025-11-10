import React, { useEffect, useState } from 'react'
import Catagories from './Catagories';
import toast from 'react-hot-toast';
import MoviesCard from './MoviesCard';
import RattingMovie from './RattingMovie';
import Footer from './Footer';

function Moviesgallary() {
    const [ movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const[selectCatagory, setSelectCatagory]=useState("ALL");
    const[showAll, setShowAll ] = useState(false);
    // console.log(setMovies);

    useEffect (()=>{
        fetch("/Movies.json")
        .then(res => res.json())
        .then(data=>{
          setMovies(data);
          setLoading(false);
          toast.success("Data Successfully Loaded")
        })
        .catch((error)=>{
            console.log("error");
            toast.error("Data Not Fatching")
        })
        .finally(()=>setLoading(false))
    },[]);

    const moviesCatagories =["ALL", ...new Set(movies.map(m=> m.category)) ];
    const filtermovies = selectCatagory==="ALL"? movies : movies.filter(m=>m.category === selectCatagory);
    const visiblemovies = showAll? filtermovies : filtermovies.slice(0, 8);


  return (
    <div>
        <Catagories
         catagories={moviesCatagories}
         selectCatagory={selectCatagory}
         setSelectCatagory={setSelectCatagory}
         ></Catagories>
         {
          loading ?
          (
            <div className='flex justify-center items-center  h-70'>
             <span className="loading loading-dots loading-md text-yellow-400"></span>

            </div>
          )
          :
          filtermovies.length > 0 ?
          (<>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
              visiblemovies.map(movie =>(
               <MoviesCard
               key = {movie.id}
               movie = {movie}
               ></MoviesCard>
              ))
            }

          </div>
          {
            filtermovies.length===0 &&(
              <p> No movies found</p>
            )
          }

          {
            filtermovies.length > 8 && (
              <div className='flex justify-center mt-8'>
                <button
                className='bg-yellow-500 hover:bg-blue-500 text-black font-semibold rounded-full transition-all px-6 py-2 duration-300'
                onClick={()=>setShowAll(!showAll)}
                >{ showAll? "Show Less":" Show More"}</button>
              </div>
            )
          }
          
          </>
          )
          :
          (<p className='text-red-500 text-center'>No Movies Found</p>)
          
         }
        

    </div>
  )
}

export default Moviesgallary