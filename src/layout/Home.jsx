import React from 'react'
import Navbar from '../components/Navbar'
import Sliders from '../components/Sliders'
import Moviesgallary from '../components/Moviesgallary'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar ></Navbar>
      <Sliders></Sliders> 
      <main>
        <Moviesgallary></Moviesgallary>
        <Toaster position='top-right'></Toaster>
      </main>
      <footer>
        <Footer></Footer>
      </footer>     
    </div>
        
   
  )
}

export default Home
