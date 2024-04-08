import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../firebase/config'
import { baseApiURL } from '../../../baseUrl'
import { FiUpload } from 'react-icons/fi'

const AddFaculty = () => {
  const [employeeId, setEmployeeId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [branch, setBranch] = useState('')
  const [post, setPost] = useState('')
  const [experience, setExperience] = useState('')

  /* const [file, setFile] = useState();
  const [branch, setBranch] = useState();
  const [data, setData] = useState({
    employeeId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    gender: "",
    experience: "",
    post: "",
    profile: "",
  });
  const getBranchData = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseApiURL()}/branch/getBranch`, { headers })
      .then((response) => {
        if (response.data.success) {
          setBranch(response.data.branches);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const uploadFileToStorage = async (file) => {
      toast.loading("Upload Photo To Storage");
      const storageRef = ref(
        storage,
        `Faculty Profile/${data.department}/${data.employeeId}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
          toast.dismiss();
          toast.error("Something Went Wrong!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            toast.dismiss();
            setFile();
            toast.success("Profile Uploaded To Faculty");
            setData({ ...data, profile: downloadURL });
          });
        }
      );
    };
    file && uploadFileToStorage(file);
  }, [data, file]);

  useEffect(() => {
    getBranchData();
  }, []);

  const addFacultyProfile = (e) => {
    e.preventDefault();
    toast.loading("Adding Faculty");
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`${baseApiURL()}/faculty/details/addDetails`, data, {
        headers: headers,
      })
      .then((response) => {
        toast.dismiss();
        if (response.data.success) {
          toast.success(response.data.message);
          axios
            .post(
              `${baseApiURL()}/faculty/auth/register`,
              { loginid: data.employeeId, password: 112233 },
              {
                headers: headers,
              }
            )
            .then((response) => {
              toast.dismiss();
              if (response.data.success) {
                toast.success(response.data.message);
                setFile();
                setData({
                  employeeId: "",
                  firstName: "",
                  middleName: "",
                  lastName: "",
                  email: "",
                  phoneNumber: "",
                  department: "",
                  gender: "",
                  experience: "",
                  post: "",
                  profile: "",
                });
              } else {
                toast.error(response.data.message);
              }
            })
            .catch((error) => {
              toast.dismiss();
              toast.error(error.response.data.message);
            });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      });
  }; */

  return (
    <form
      // onSubmit={addFacultyProfile}
      className='w-[70%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
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
        <label htmlFor='employeeId' className='leading-7 text-sm '>
          Enter Employee Id
        </label>
        <input
          type='number'
          id='employeeId'
          value={employeeId}
          onChange={e => setEmployeeId(e.target.value)}
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
          {' '}
          <option defaultValue>-- Select --</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
      <div className='w-[40%]'>
        <label htmlFor='branch' className='leading-7 text-sm '>
          Select Department
        </label>
        <select
          id='branch'
          className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
          value={branch}
          onChange={e => setBranch(e.target.value)}
        >
          <option defaultValue>-- Select --</option>
          {/* {branch?.map(branch => {
              return (
                <option value={branch.name} key={branch.name}>
                  {branch.name}
                </option>
              )
            })} */}
        </select>
      </div>
      <div className='w-[40%]'>
        <label htmlFor='post' className='leading-7 text-sm '>
          Enter POST
        </label>
        <input
          type='text'
          id='post'
          value={post}
          onChange={e => setPost(e.target.value)}
          className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='w-[40%]'>
        <label htmlFor='experience' className='leading-7 text-sm '>
          Enter Experience
        </label>
        <input
          type='number'
          id='experience'
          value={experience}
          onChange={e => setExperience(e.target.value)}
          className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='w-[40%]'>
        <label htmlFor='file' className='leading-7 text-sm '>
          Select Profile
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
        <input hidden type='file' id='file' accept='image/*' />
      </div>
      {/*  {data.profile && (
        <div className="w-full flex justify-center items-center">
          <img src={data.profile} alt="student" className="h-36" />
        </div>
      )} */}
      <button
        type='submit'
        className='bg-blue-500 px-6 py-3 rounded-sm my-6 text-white'
      >
        Add New Faculty
      </button>
    </form>
  )
}

export default AddFaculty
