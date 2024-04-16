import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const UpcomingDrive = () => {
  const upcomingDrives = useSelector(state =>
    state.studentPlacement.drives.filter(
      drive => new Date(drive.date) >= new Date()
    )
  )

  /* const pastDrives = [
    {
      companyName: 'Company A',
      package: '$60,000',
      location: 'New York',
      date: '2023-08-15'
    },
    {
      companyName: 'Company B',
      package: '$70,000',
      location: 'San Francisco',
      date: '2023-09-20'
    },
    {
      companyName: 'Company B',
      package: '$70,000',
      location: 'San Francisco',
      date: '2023-09-20'
    },
    {
      companyName: 'Company B',
      package: '$70,000',
      location: 'San Francisco',
      date: '2023-09-20'
    },
    {
      companyName: 'Company B',
      package: '$70,000',
      location: 'San Francisco',
      date: '2023-09-20'
    }
    // Add more past drive data as needed
  ] */

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {upcomingDrives &&
        upcomingDrives.map((drive, index) => (
          <Card
            key={index}
            companyName={drive.companyName}
            package={drive.package}
            location={drive.location}
            date={drive.date}
          />
        ))}
    </div>
  )
}

export default UpcomingDrive
