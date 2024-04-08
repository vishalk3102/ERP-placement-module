import React from 'react'
import Card from './Card'

const PastDrive = () => {
  // Sample data for past drives
  const pastDrives = [
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
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {pastDrives.map((drive, index) => (
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

export default PastDrive
