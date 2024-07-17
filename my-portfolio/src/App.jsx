import { useState } from 'react'
import React from 'react';
import Aboutme from './Components/Aboutme';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='sm:px-4 lg:px-12 px-4 py-4 bg-black h-full'>
    <div className="flex justify-center p-0 sm:p-4">
      <div className='grid grid-cols-2 gap-4 w-full max-w-screen-2xl sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6'>
        <div className='bg-[#121416] rounded-xl border-2 border-[#28292b] col-span-1 sm:col-span-2 md:col-span-1'>

        </div>
        <div className='bg-[#121416] rounded-xl border-2 border-[#28292b] h-[200px] col-span-1 sm:col-span-2 md:col-span-1'>

        </div>
        <div className='bg-[#121416] rounded-xl h-[200px] border-2 border-[#28292b] col-span-2 sm:col-span-2 md:col-span-1' >

        </div>
        <div className='bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-4 md:col-span-2'>

        </div>
        <div className='bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-2 md:col-span-1'>

        </div>
        <div className='bg-[#121416] rounded-xl col-span-2 row-span-2 h-[420px] sm:h-[350px]  sm:col-span-4 md:col-span-3'>
          
        </div>
        <div className='bg-[#121416] rounded-xl col-span-2 row-span-2 h-[400px] border-2 border-[#28292b] sm:col-span-2 md:col-span-1'>

        </div>
        <div className='bg-[#121416] rounded-xl col-span-2 row-span-2 h-[400px] border-2 border-[#28292b] sm:col-span-4 md:col-span-2'>

        </div>
        <div className='bg-[#121416] rounded-xl col-span-2 row-span-2 h-[330px] xl:-mt-[140px] border-2 border-[#28292b] sm:col-span-4 md:col-span-3'>

        </div>

      </div>
      
      
       



    </div >
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mx-auto flex h-16 items-end gap-4 rounded-t-2xl bg-[#121416] px-4 pb-2 border-2 border-[#28292b] z-50">
      
      </div>
    </div>


  )
}

export default App
