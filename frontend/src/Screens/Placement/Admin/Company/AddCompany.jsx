import React, { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'

const AddCompany = () => {
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
    <>
      <section id='Profile' className='w-full h-full'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <h2
              className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
            >
              Add Company Profile
            </h2>
            <form
              //   onSubmit={handleSubmit}
              className='w-[100%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
            >
              <div className='w-[40%]'>
                <label htmlFor='companyName' className='leading-7 text-sm '>
                  Company Name
                </label>
                <input
                  type='text'
                  id='companyName'
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='website' className='leading-7 text-sm '>
                  Website
                </label>
                <input
                  type='text'
                  id='website'
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='industry' className='leading-7 text-sm '>
                  Industry
                </label>
                <input
                  type='text'
                  id='industry'
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='location' className='leading-7 text-sm '>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='package' className='leading-7 text-sm '>
                  Package
                </label>
                <input
                  type='text'
                  id='package'
                  value={salaryPackage}
                  onChange={e => setSalaryPackage(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='about' className='leading-7 text-sm '>
                  About
                </label>
                <textarea
                  id='about'
                  value={about}
                  onChange={e => setAbout(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></textarea>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='contactPerson' className='leading-7 text-sm '>
                  Contact Person
                </label>
                <input
                  type='text'
                  id='contactPerson'
                  value={contactPerson}
                  onChange={e => setContactPerson(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='contactPhone' className='leading-7 text-sm '>
                  Contact Phone No
                </label>
                <input
                  type='number'
                  id='contactPhone'
                  value={contactPhone}
                  onChange={e => setContactPhone(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='email' className='leading-7 text-sm '>
                  Contact Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[80%] flex justify-center items-center'>
                <button
                  type='submit'
                  className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
                >
                  Add Company
                </button>
              </div>
            </form>
          </div>
        </Box>
      </section>
    </>
  )
}

export default AddCompany
