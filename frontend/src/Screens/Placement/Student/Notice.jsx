import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'
import Loader from '../../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotice } from '../../../Redux/Actions/studentAction'
import toast from 'react-hot-toast'

const Notice = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllNotice())
      .then(data => {
        if (data.notices) {
          toast.success('Notices Loaded')
        }
        return
      })
      .catch(err => {
        toast.error('Error Loading Notices ')
      })
  }, [dispatch])

  const { notices, loading } = useSelector(state => state.studentPlacement)

  const filteredNotices = notices.filter(notice => notice.type === 'placement')

  return (
    <>
      <MetaData title='Notice' />
      <section id='notice' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={` NOTICES`} />

              <div
                className='mt-8
            '
              >
                {filteredNotices &&
                  filteredNotices.map((val, index) => {
                    return (
                      <>
                        <div
                          className='bg-blue-200 rounded-lg shadow-md p-6 w-full my-3'
                          key={index}
                        >
                          <h3 className='text-lg font-semibold mb-2'>
                            {val.title}
                          </h3>
                          <p className='text-black mb-2'>{val.content}</p>
                        </div>
                      </>
                    )
                  })}
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </Box>
      </section>
    </>
  )
}

export default Notice
