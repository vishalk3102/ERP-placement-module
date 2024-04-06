// CompanyDetails.js
import React from 'react'

const CompanyDetail = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>contata Details</h1>
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Student Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>vishal</td>
          </tr>
        </tbody>
      </table>
      <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Download as Excel
      </button>
    </div>
  )
}

export default CompanyDetail
