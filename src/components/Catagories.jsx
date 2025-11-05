import React from 'react'

function Catagories({catagories, selectCatagory, setSelectCatagory}) {
  return (
    <>
    <div className='w-11/12 mx-auto'>
        <div className='text-2xl py-10'>RECOMMENDED FOR YOU</div>
    <div className='flex flex-wrap gap-4 md:gap-5 justify-start items-center'>
        {
            catagories.map(cat=>(
            <button key={cat} 
            onClick={()=>setSelectCatagory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${selectCatagory === cat ?" bg-yellow-500 text-black" :"border border-amber-500 hover:bg-yellow-500 hover:text-black" } `}>{cat}</button>
            ))
        }
      
    </div>
    </div>
    </>
  )
}

export default Catagories
