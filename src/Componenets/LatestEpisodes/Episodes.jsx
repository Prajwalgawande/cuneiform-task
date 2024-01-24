import React from 'react'
import './latestepisodes.css'
const Episodes = (props) => {
  return (
    <div>
        <div className="latest-box">
          <img src={props.url} alt="" />
          <div className="season-no">Season 1</div>
          <div className="episode-title">The standard Lorem Ipsum passage</div>
          <div className="date-time">May 21,2022 · 1 hr 01 min</div>
          <div className="buttons-episodes">
          <i class="fa fa-play-circle" aria-hidden="true"></i>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
          </div>

        </div>
    </div>
  )
}

export default Episodes