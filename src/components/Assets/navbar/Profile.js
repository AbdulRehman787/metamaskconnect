import React, { useEffect, useState } from 'react'
import Navi from './Nav'
import './style.css'
const Profile = () => {
    const [data,setData] = useState('')

    useEffect(()=>{

        const res=localStorage.getItem('walletAddress')
        const dat= JSON.parse(res)
        setData(dat)
    },[])

  return (
    <>
    <Navi />
    <div className='wrapper1'>
        <div>
        <h2 className='head'>Profile</h2>


        <h3 className='head'>Wallet Address</h3>
       
<h3 className='head'>{data}</h3>

    </div></div>

    
    </>
    
  )
}

export default Profile