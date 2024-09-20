import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-pink-600 text-white p-4 text-3xl'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
  )
}
 
export default Github

export const githubInfo= async () => {
    
   const res=  await fetch(`https://api.github.com/users/pritamkumar143`)
   return res.json()
    
}