import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {

  return (
    <div id='Home' className='Hero'>
      <img src={profile_img} alt="profile" />
      <h1><span>I'm Barathkumar,<br /></span>frontend developer based in india</h1>
      <p>i'm frontend developer i have 6month of experience in product based compani like  HashHackCode</p>
      <div className="hero_action">
        <div className="hero_connect"><AnchorLink className='Anchor_link' offset={50} href='#Contact'> <div onClick={() => { setMenu('Contact') }}>connect with me</div></AnchorLink></div>
        <div className="hero_resume">
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download >
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero