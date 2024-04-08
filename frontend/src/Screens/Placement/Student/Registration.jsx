import React, { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'

const Registration = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('')
  const [universityRollNo, setUniversityRollNo] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [branch, setBranch] = useState('')
  const [semester, setSemester] = useState('')
  const [highSchoolPercentage, setHighSchoolPercentage] = useState('')
  const [intermediatePercentage, setIntermediatePercentage] = useState('')
  const [BtechCgpa, setBtechCgpa] = useState('')
  const [highSchoolCompletionYear, setHighSchoolCompletionYear] = useState('')
  const [intermediateCompletionYear, setIntermediateCompletionYear] =
    useState('')
  const [btechGraduationYear, setBtechGraduationYear] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      enrollmentNo,
      universityRollNo,
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      dob,
      university,
      course,
      branch,
      semester,
      highSchoolPercentage,
      intermediatePercentage,
      BtechCgpa,
      highSchoolCompletionYear,
      intermediateCompletionYear,
      btechGraduationYear
    }
    console.log(formData)
  }
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
              Register for placement
            </h2>
            <form
              onSubmit={handleSubmit}
              className='w-[100%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
            >
              <div className='w-[40%]'>
                <label htmlFor='firstname' className='leading-7 text-sm '>
                  Enter First Name
                </label>
                <input
                  type='text'
                  id='firstname'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='lastname' className='leading-7 text-sm '>
                  Enter Last Name
                </label>
                <input
                  type='text'
                  id='lastname'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='enrollmentNo' className='leading-7 text-sm '>
                  Enter Enrollment No
                </label>
                <input
                  type='text'
                  id='enrollmentNo'
                  value={enrollmentNo}
                  onChange={e => setEnrollmentNo(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label
                  htmlFor='university-rollno'
                  className='leading-7 text-sm '
                >
                  Enter University Rollno
                </label>
                <input
                  type='text'
                  id='university-rollno'
                  value={universityRollNo}
                  onChange={e => setUniversityRollNo(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='email' className='leading-7 text-sm '>
                  Enter Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='phoneNumber' className='leading-7 text-sm '>
                  Enter Phone Number
                </label>
                <input
                  type='number'
                  id='phoneNumber'
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='gender' className='leading-7 text-sm '>
                  Select Gender
                </label>
                <select
                  id='gender'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='dateOfBirth' className='leading-7 text-sm'>
                  Date of Birth
                </label>
                <input
                  type='date'
                  id='dateOfBirth'
                  value={dob}
                  onChange={e => setDob(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='university' className='leading-7 text-sm'>
                  Select University
                </label>
                <select
                  id='university'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={university}
                  onChange={e => setUniversity(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  <option value='University A'>University A</option>
                  <option value='University B'>University B</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='course' className='leading-7 text-sm '>
                  Select Course
                </label>
                <select
                  id='course'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  <option value='B-Tech'>Bachelor's of Technology</option>
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='branch' className='leading-7 text-sm '>
                  Select Branch
                </label>
                <select
                  id='branch'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={branch}
                  onChange={e => setBranch(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  {/*  {branch?.map(branch => {
                return (
                  <option value={branch.name} key={branch.name}>
                    {branch.name}
                  </option>
                )
              })} */}
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='semester' className='leading-7 text-sm '>
                  Select Semester
                </label>
                <select
                  id='semester'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={semester}
                  onChange={e => setSemester(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  <option value='1'>1st Semester</option>
                  <option value='2'>2nd Semester</option>
                  <option value='3'>3rd Semester</option>
                  <option value='4'>4th Semester</option>
                  <option value='5'>5th Semester</option>
                  <option value='6'>6th Semester</option>
                  <option value='7'>7th Semester</option>
                  <option value='8'>8th Semester</option>
                </select>
              </div>
              <div className='w-[40%]'>
                <label
                  htmlFor='highSchoolPercentage'
                  className='leading-7 text-sm'
                >
                  High School Percentage
                </label>
                <input
                  type='number'
                  id='highSchoolPercentage'
                  value={highSchoolPercentage}
                  onChange={e => setHighSchoolPercentage(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label
                  htmlFor='highSchoolCompletionYear'
                  className='leading-7 text-sm'
                >
                  Year of Completion (10th)
                </label>
                <input
                  type='number'
                  id='highSchoolCompletionYear'
                  value={highSchoolCompletionYear}
                  onChange={e => setHighSchoolCompletionYear(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label
                  htmlFor='intermediatePercentage'
                  className='leading-7 text-sm'
                >
                  12th Percentage
                </label>
                <input
                  type='number'
                  id='intermediatePercentage'
                  value={intermediatePercentage}
                  onChange={e => setIntermediatePercentage(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label
                  htmlFor='intermediateCompletionYear'
                  className='leading-7 text-sm'
                >
                  Year of Completion (12th)
                </label>
                <input
                  type='number'
                  id='intermediateCompletionYear'
                  value={intermediateCompletionYear}
                  onChange={e => setIntermediateCompletionYear(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='BtechCgpa' className='leading-7 text-sm'>
                  B-tech Aggregate CGPA
                </label>
                <input
                  type='number'
                  id='BtechCgpa'
                  value={BtechCgpa}
                  onChange={e => setBtechCgpa(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label
                  htmlFor='btechGraduationYear'
                  className='leading-7 text-sm'
                >
                  Graduation Year
                </label>
                <input
                  type='number'
                  id='btechGraduationYear'
                  value={btechGraduationYear}
                  onChange={e => setBtechGraduationYear(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='file' className='leading-7 text-sm '>
                  Upload Profile Photo
                </label>
                <label
                  htmlFor='file'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full flex justify-center items-center cursor-pointer'
                >
                  Upload
                  <span className='ml-2'>
                    <FiUpload />
                  </span>
                </label>
                <input
                  hidden
                  type='file'
                  id='file'
                  accept='image/*'
                  // onChange={e => setFile(e.target.files[0])}
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='file' className='leading-7 text-sm '>
                  Upload Resume
                </label>
                <label
                  htmlFor='file'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full flex justify-center items-center cursor-pointer'
                >
                  Upload
                  <span className='ml-2'>
                    <FiUpload />
                  </span>
                </label>
                <input
                  hidden
                  type='file'
                  id='file'
                  accept='image/*'
                  // onChange={e => setFile(e.target.files[0])}
                />
              </div>
              {/*  {data.profile && (
            <div className='w-full flex justify-center items-center'>
              <img src={data.profile} alt='student' className='h-36' />
            </div>
          )} */}
              <div className='w-[40%] flex justify-center items-center'>
                <button
                  type='submit'
                  className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Registration
