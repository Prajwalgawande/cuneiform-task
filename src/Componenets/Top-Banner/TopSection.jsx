import React from 'react'
import './topsection.css'
import banner from '../../images/banner.png'

const TopSection = () => {
  return (
    <div>
    <div className='topsection'>
        <img src={banner} alt="banner" />
    </div>
    </div>
  )
}

export default TopSection