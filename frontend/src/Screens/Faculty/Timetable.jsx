import React, { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import Heading from '../../components/Heading'
import { AiOutlineClose } from 'react-icons/ai'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import toast from 'react-hot-toast'
import { storage } from '../../firebase/config'
import { baseApiURL } from '../../baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBranch } from '../../Redux/Actions/adminAction'
import { addTimetable } from '../../Redux/Actions/facultyAction'
const Timetable = () => {
  const [branch, setBranch] = useState()
  const [semester, setSemester] = useState()
  const [timetable, setTimetable] = useState()
  const [selected, setSelected] = useState()

  const { branches } = useSelector(state => state.admin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBranch())
  })

  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
    console.log(file)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setTimetable(reader.result)
    }
  }

  const addTimetableHandler = e => {
    e.preventDefault()
    dispatch(addTimetable({ branch, semester, timetable }))
  }

  // useEffect(() => {
  //   const uploadFileToStorage = async (file) => {
  //     toast.loading("Upload Timetable To Server");
  //     const storageRef = ref(
  //       storage,
  //       `Timetable/${addselected.branch}/Semester ${addselected.semester}`
  //     );
  //     const uploadTask = uploadBytesResumable(storageRef, file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {},
  //       (error) => {
  //         console.error(error);
  //         toast.dismiss();
  //         // toast.error("Something Went Wrong!");
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           toast.dismiss();
  //           setFile();
  //           toast.success("Timetable Uploaded To Server");
  //           setAddSelected({ ...addselected, link: downloadURL });
  //           addTimetableHandler();
  //         });
  //       }
  //     );
  //   };
  //   file && uploadFileToStorage(file);
  // }, [file]);

  // const getBranchData = () => {
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   axios
  //     .get(`${baseApiURL()}/branch/getBranch`, { headers })
  //     .then((response) => {
  //       if (response.data.success) {
  //         setBranch(response.data.branches);
  //       } else {
  //         toast.error(response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       toast.error(error.message);
  //     });
  // };

  // const addTimetableHandler = () => {
  //   toast.loading("Adding Timetable");
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   axios
  //     .post(`${baseApiURL()}/timetable/addTimetable`, addselected, {
  //       headers: headers,
  //     })
  //     .then((response) => {
  //       toast.dismiss();
  //       if (response.data.success) {
  //         toast.success(response.data.message);
  //         setAddSelected({
  //           branch: "",
  //           semester: "",
  //           link: "",
  //         });
  //         setFile("");
  //       } else {
  //         console.log(response);
  //         toast.error(response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.dismiss();
  //       toast.error(error.response.data.message);
  //     });
  // };
  return (
    <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
      <div className='flex justify-between items-center w-full'>
        <Heading title={`Upload Timetable`} />
      </div>
      <div className='w-full flex justify-evenly items-center mt-12'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <p className='mb-4 text-xl font-medium'>Add Timetable</p>
          <select
            id='branch'
            className='px-2 bg-blue-50 py-3 rounded-sm text-base w-[80%] accent-blue-700 mt-4'
            value={branch}
            onChange={e => setBranch(e.target.value)}
          >
            <option defaultValue>-- Select Branch--</option>
            {branches &&
              branches.map(i => {
                return (
                  <option value={i.name} key={i.name}>
                    {i.name}
                  </option>
                )
              })}
          </select>
          <select
            name='semester'
            id='semester'
            className='px-2 bg-blue-50 py-3 rounded-sm text-base w-[80%] accent-blue-700 mt-4'
            value={semester}
            onChange={e => setSemester(e.target.value)}
          >
            <option defaultValue>-- Select Semester --</option>
            <option value='1'>1st Semester</option>
            <option value='2'>2nd Semester</option>
            <option value='3'>3rd Semester</option>
            <option value='4'>4th Semester</option>
            <option value='5'>5th Semester</option>
            <option value='6'>6th Semester</option>
            <option value='7'>7th Semester</option>
            <option value='8'>8th Semester</option>
          </select>
          {!selected && (
            <label
              htmlFor='upload'
              className='px-2 bg-blue-50 py-3 rounded-sm text-base w-[80%] mt-4 flex justify-center items-center cursor-pointer'
            >
              Upload Timetable
              <span className='ml-2'>
                <FiUpload />
              </span>
            </label>
          )}
          {selected && (
            <p
              className='px-2 border-2 border-blue-500 py-2 rounded text-base w-[80%] mt-4 flex justify-center items-center cursor-pointer'
              onClick={() => setSelected('')}
            >
              Remove Selected Timetable
              <span className='ml-2'>
                <AiOutlineClose />
              </span>
            </p>
          )}
          <input
            hidden
            onChange={handleImage}
            type='file'
            id='file'
            name='timetable'
            accept='image/*'
          />
          <button
            className='bg-blue-500 text-white mt-8 px-4 py-2 rounded-sm'
            onClick={addTimetableHandler}
          >
            Add Timetable
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timetable
