import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';

function Footer() {
  return (
    <div className='font-monts'>
        <div className=' bg-neutral text-neutral-content'>
            <footer className="footer sm:footer-horizontal bg-neutral  w-11/12 mx-auto pt-10 pb-3 text-[#a3a3a3]">
            <nav>
                 <p className=" text-2xl text-yellow-400 font-grif">DRAMATIC</p>
                 <p className='text-sm text-[#a3a3a3]'>Enjoy your Movie time</p>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Navigation</h6>
                    <ul>
                        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100 pt-2'>HOME</li>
                        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100 pt-2'>TV SHOW</li>
                        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100 pt-2'>MOVIES</li>
                        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100 pt-2'>NEW</li>
                    </ul>
            </nav>
            <nav>
                <h6 className="footer-title  text-white">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title  text-white">TALK TO US</h6>
                <a className="link link-hover">support@ercom.com</a>
                <a className="link link-hover">+66 2399 1145</a>
            </nav>
            <nav>
                 <h6 className="footer-title  text-white">FOLLOW US</h6>
                 <div className='flex justify-start gap-4 items-center'>
                    <FaTwitter className='text-2xl'/>
                    <FaYoutube className='text-2xl'/>
                    <FaFacebook className='text-2xl'/>

                 </div>

            </nav>
            
</footer>
        </div>
        
      
    </div>
  )
}

export default Footer
