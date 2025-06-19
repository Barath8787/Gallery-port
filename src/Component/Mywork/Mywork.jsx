import React from 'react'
import './Mywork.css'
import theme from '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import Arrow from '../../assets/arrow_icon.svg'

function Mywork() {
  return (
    <div id='Work' className="mywork">
      <div className="mywork_title">
        <h1>My Work</h1>
        <img src={theme} alt="" />
      </div>

      <div className="mywork_container">
        {mywork.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>

      <div className="mywork_showmore">
        <p>Showmore</p>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default Mywork
