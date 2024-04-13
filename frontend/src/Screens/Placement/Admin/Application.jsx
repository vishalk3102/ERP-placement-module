import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { getApplications } from '../../../Redux/Actions/placementAction'
import Loader from '../../../components/Loader'

const Application = () => {
  const dispatch = useDispatch()

  const { loading, companies, error, message } = useSelector(
    state => state.adminPlacement
  )

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' })
    }
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getApplications())
  }, [dispatch, message, error])

  // const [selectedCompany, setSelectedCompany] = useState(null)
  // const [companyData] = useState([
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   },
  //   {
  //     id: 1,
  //     name: 'Company A',
  //     students: ['Alice', 'Bob', 'Charlie']
  //   },
  //   {
  //     id: 2,
  //     name: 'Company B',
  //     students: ['David', 'Emma', 'Frank']
  //   }
  // ])

  // const handleTabClick = companyId => {
  //   setSelectedCompany(companyId)
  // }

  return (
    <>
      <section id='Orders' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <h2
                className='text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5'
              >
                Company Wise Registered Student Application
              </h2>
              <div className='border-solid border-2 border-black my-6 flex justify-evenly  items-center flex-wrap'>
                {companies &&
                  companies.map((i, index) => (
                    <div className='text-[#fff] text-[18px] font-semibold flex justify-center items-center bg-blue-500  rounded m-4 py-4 px-8 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all capitalize'>
                      {' '}
                      <Link to={`/admin/placement/application/${i._id}`}>
                        {i.companyName}
                      </Link>
                    </div>
                  ))}
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

export default Application
