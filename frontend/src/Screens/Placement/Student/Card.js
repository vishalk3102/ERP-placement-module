import React from 'react'

const Card = ({ companyName, salaryPackage, location, date }) => {
  return (
    <div className='bg-blue-200 rounded-lg shadow-md p-6 w-80'>
      <h3 className='text-lg font-semibold mb-2 capitalize'>{companyName}</h3>
      <p className='text-black mb-2'>Package: {salaryPackage}</p>
      <p className='text-black mb-2'>Location: {location}</p>
      <p className='text-black'>Date: {date}</p>
    </div>
  )
}

export default Card
