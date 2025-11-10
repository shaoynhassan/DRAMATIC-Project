import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sliders from '../components/Sliders'
import Moviesgallary from '../components/Moviesgallary'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import RattingMovie from './../components/RattingMovie';

function Home({movies}) {
  const [searchText, SetSearchText] = useState("");
  return (
    <div>
      <Navbar searchText={searchText} SetSearchText={SetSearchText}></Navbar>
      <Sliders></Sliders> 
      <main>
        <Moviesgallary ></Moviesgallary>
        <Toaster position='top-right'></Toaster>
        <RattingMovie searchText={searchText}></RattingMovie>
      </main>
      
      <footer>
        <Footer></Footer>
      </footer>     
    </div>
        
   
  )
}

export default Home
