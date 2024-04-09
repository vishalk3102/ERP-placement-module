import React, { useState } from 'react'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'

const ViewCompany = () => {
  // State variables for company details
  const [companyName, setCompanyName] = useState('')
  const [website, setWebsite] = useState('')
  const [industry, setIndustry] = useState('')
  const [location, setLocation] = useState('')
  const [salaryPackage, setSalaryPackage] = useState('')
  const [about, setAbout] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  return (
    <section id='Student' className='w-full h-full mt-20'>
      <Box sx={{ display: 'flex', marginTop: '5rem' }}>
        <SideNavbar />
        <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
          <h2 className='text-[#000] text-[2.5rem] font-bold text-center uppercase p-2 mt-5'>
            Company Details
          </h2>
          <div className='w-[90%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px] my-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 w-[80%] mx-auto my-2'>
              <div className='col-span-1 md:col-span-2 '>
                <ul className='flex flex-col justify-center items-start p-4'>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Company Name :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Contata Solutions
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Website :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      www.contata.com
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Industry :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      IT
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    About :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      IT company that provide service to other companies
                    </span>
                  </li>
                </ul>
              </div>
              <div className='col-span-1 md:col-span-2 '>
                <ul className='flex flex-col justify-center items-start p-4'>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Location :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Noida
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Salary Package :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      4.5LPA
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Contact Person :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Vishal Kumar
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Contact Phone :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      8459126643
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Contact Email :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      vishal.k3102@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default ViewCompany
