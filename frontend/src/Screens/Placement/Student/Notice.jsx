import React from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'

const Notice = () => {
  // Sample notice data
  const notices = [
    {
      title: 'Notice 1',
      content: 'This is the content of Notice 1.'
    },
    {
      title: 'Notice 2',
      content: 'This is the content of Notice 2.'
    },
    {
      title: 'Notice 3',
      content: 'This is the content of Notice 3.'
    }
  ]

  return (
    <section id='Orders' className='w-full h-full  mt-20'>
      <Box sx={{ display: 'flex', marginTop: '5rem' }}>
        <SideNavbar />
        <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
          <h2
            className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
          >
            Campus Placement Drive
          </h2>
          <div className=''>
            {notices.map((val, index) => (
              <div className='bg-white rounded-lg shadow-md p-6 w-full my-3'>
                <h3 className='text-lg font-semibold mb-2'>{val.title}</h3>
                <p className='text-gray-600 mb-2'>{val.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </section>
  )
}

export default Notice
