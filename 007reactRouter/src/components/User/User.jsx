import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userid } = useParams()

  if (!userid) {
    return <div>User ID is required</div>
  }

  return (
    <div className='bg-pink-400 text-3xl text-center  flex  justify-center rounded-lg p-4 '>User: {userid}</div>
  )
}

export default User