import React from 'react'
import geuLogo from '../assets/geu.png'

const Loader = () => {
  return (
    <>
      <section id='Loader' className='w-full h-full'>
        <div className='w-[100%] h-[100%] max-w-[1200px] mx-auto py-40 flex justify-center items-center'>
          <img
            src={geuLogo}
            alt='logo'
            className='w-[125px] h-[125px] animate-pulse'
          />
        </div>
      </section>
    </>
  )
}

export default Loader
