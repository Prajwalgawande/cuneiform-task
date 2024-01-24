import React from 'react'
import './popularpodcast.css'

const PopularPodcast = () => {
  return (
    <div>
      <div className="title">
        <div className="title-text">POPULAR PODCAST</div>
        <div className="line"></div>
      </div>
      <div className="boxes">
        <div className="left-box">
          <div className="number">01.</div>
          <div className="gray-line"></div>
          <div className="verticle-text"><p>What is Lorem</p></div>
        </div>
        <div className="middle-box">
          <div className="middle-num">02.</div>
          <div className="box-detiles">
            <div className="box-title">What is Lorem</div>
            <div className="box-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
          </div>
        </div>
        <div className="right-box ">
          <div className="number">03.</div>
          <div className="gray-line"></div>
          <div className="verticle-text"><p>What is Lorem</p></div>
        </div>
      </div>
    </div>
  )
}

export default PopularPodcast