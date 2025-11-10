import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegEye, FaRegHeart, FaRegStar } from "react-icons/fa";


function RattingMovie({searchText}) {
   const [ movies, setMovies] = useState([]);
  const topMovies = movies
        .filter((movie) => movie.rating >= 7)
        .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
        


   useEffect (()=>{
          fetch("/Movies.json")
          .then(res => res.json())
          .then(data=>{
            setMovies(data)});
      });
  

 return (
  <div className="w-11/12 mx-auto py-10">
    {
    topMovies.length > 0 ? (
      <div>
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
          ⭐ Top Rated Movies
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {topMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="font-monts bg-gray-900 rounded-xl p-5 shadow-md transition-transform duration-300 hover:scale-105">
                <img
                  src={movie.card_picture}
                  alt={movie.title}
                  className="h-60 w-full object-cover rounded-lg"
                />
                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                    <div className="flex gap-2">
                      <FaRegEye className="text-gray-400" />
                      <FaRegHeart className="text-rose-500" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{movie.released_date}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="bg-yellow-500 text-black font-semibold text-sm rounded px-2">
                      {movie.platform}
                    </p>
                    <p className="text-gray-300 flex items-center text-sm">
                      <FaRegStar className="text-yellow-400 mr-1" />
                      {movie.rating}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ) : (
     <div className="flex justify-center items-center">
       <p className="font-monts bg-gray-900 rounded-xl p-5 shadow-md transition-transform duration-300 hover:scale-105 text-center h-100 w-80 border border-b-cyan-500 text-red-700 font-bold text-lg">Movies not found</p>
     </div>
    )}
  </div>
);

}

export default RattingMovie;
