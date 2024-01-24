import React from 'react'
import './latestepisodes.css'
import Episodes from './Episodes'
import img2 from "../../images/Mask2.png"
import img1 from "../../images/Mask group (1).png"
import img3 from "../../images/Mask group (3).png"
import img4 from "../../images/Mask group (4).png"
import img5 from "../../images/Mask group (5).png"
import img6 from "../../images/Mask group.png"
const LatestEpisodes = () => {
  const episodes=[
    {
      Id:1,
      url:img1
    },
    {
      Id:2,
      url:img2
    },
    {
      Id:3,
      url:img3
    },
    {
      Id:4,
      url:img4
    },
    {
      Id:5,
      url:img5
    },
    {
      Id:6,
      url:img6
    },
  ]
  return (
    <div>
      <div className="latest-top">
        <p className="latest-title">LATEST EPISODES</p>
        <div className="tabs">
          <div className="tab active">All</div>
          <div className="tab">Season 1</div>
          <div className="tab">Season 2</div>
          <div className="tab">Season 3</div>
        </div>
      </div>
      <div className="latest-boxes">
        {
          episodes.map((item)=>{return <Episodes key={item.Id} url={item.url}/>})
        }
      </div>
      <div className="load-more "><a href="#" className='tab'>Load More <i class="fa fa-repeat" aria-hidden="true"></i></a></div>
    </div>
  )
}

export default LatestEpisodes