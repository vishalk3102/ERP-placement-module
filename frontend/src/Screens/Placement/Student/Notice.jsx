import React from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

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
    <>
      <MetaData title='Notice' />
      <section id='notice' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <Heading title={` NOTICES`} />

            <div
              className='mt-8
            '
            >
              {notices.map((val, index) => (
                <div className='bg-blue-50 rounded-lg shadow-md p-6 w-full my-3'>
                  <h3 className='text-lg font-semibold mb-2'>{val.title}</h3>
                  <p className='text-gray-600 mb-2'>{val.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Notice
