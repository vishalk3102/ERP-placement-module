import React, { useState } from 'react'
import EditAdmin from './EditAdmin'
import AddAdmin from './AddAdmin'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const Admin = () => {
  const [selected, setSelected] = useState('add')

  return (
    <>
      <MetaData title='Admin' />
      <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
        <div className='flex justify-between items-center w-full'>
          <Heading title='Admin Details' />
          <div className='flex justify-end items-center w-full'>
            <button
              className={`${
                selected === 'add' && 'border-b-2 '
              }border-blue-500 px-4 py-2 text-black rounded-sm mr-6`}
              onClick={() => setSelected('add')}
            >
              Add Admin
            </button>
            <button
              className={`${
                selected === 'edit' && 'border-b-2 '
              }border-blue-500 px-4 py-2 text-black rounded-sm`}
              onClick={() => setSelected('edit')}
            >
              Edit Admin
            </button>
          </div>
        </div>
        {selected === 'add' && <AddAdmin />}
        {selected === 'edit' && <EditAdmin />}
      </div>
    </>
  )
}

export default Admin
