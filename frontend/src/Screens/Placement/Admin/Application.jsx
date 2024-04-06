import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'
import CompanyDetails from './CompanyDetail'

const Application = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [companyData] = useState([
    {
      id: 1,
      name: 'Company A',
      students: ['Alice', 'Bob', 'Charlie']
    },
    {
      id: 2,
      name: 'Company B',
      students: ['David', 'Emma', 'Frank']
    }
    // Add more dummy data as needed
  ])

  const handleTabClick = companyId => {
    setSelectedCompany(companyId)
  }

  return (
    <>
      <section id='Orders' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <h2
              className='text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5'
            >
              Company Wise Registered Student Application
            </h2>
            <div className='border-solid border-2 border-black'>
              <div className='container mx-auto p-4'>
                <div className='flex'>
                  {companyData.map(company => (
                    <Link
                      key={company.id}
                      to={`/admin/application/company/companydetail`}
                      className={`cursor-pointer p-2 rounded-md ${
                        selectedCompany === company.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700'
                      } mr-2`}
                      onClick={() => handleTabClick(company.id)}
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Application
