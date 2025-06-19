import React, { useState,useRef } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_Close from '../../assets/menu_close.svg'

function Navbar() {
  const[menu,setMenu]=useState('Home')

  const menuRef = useRef();
   
  const menuopen=()=>{
    menuRef.current.style.right='0'
  }
   const menuclose=()=>{
    menuRef.current.style.right='-350px'
  }
  return (
    <div className='Navbar'>
<img src={logo} alt="" />
<img src={menu_open} alt=""  className='nav_mob_open' onClick={menuopen}/>

<ul className='nav_menu' ref={menuRef}>
  <img src={menu_Close} alt="" className='nav_mob_close' onClick={menuclose}/>
  <li> <AnchorLink className='Anchor_link' href='#Home'> <p onClick={()=>{setMenu('Home')}}>Home</p></AnchorLink>{menu==='Home'?<img src={underline} alt=""/>:<></> }</li>
  <li> <AnchorLink className='Anchor_link' offset={50} href='#About me'> <p onClick={()=>{setMenu('About me')}}>About me</p></AnchorLink>{menu==='About me'?<img src={underline} alt=""/>:<></> }</li>
  <li> <AnchorLink className='Anchor_link' offset={50} href='#Services'> <p onClick={()=>{setMenu('Service')}}>Service</p></AnchorLink>{menu==='Service'?<img src={underline} alt=""/>:<></> }</li>
  <li> <AnchorLink className='Anchor_link' offset={50} href='#Work'> <p onClick={()=>{setMenu('Work')}}>Work</p></AnchorLink>{menu==='Work'?<img src={underline} alt=""/>:<></> }</li>
  <li> <AnchorLink className='Anchor_link' offset={50} href='#Contact'> <p onClick={()=>{setMenu('Contact')}}>contact</p></AnchorLink>{menu==='Contact'?<img src={underline} alt=""/>:<></> }</li>
</ul>
<div className="nav_connect"><AnchorLink className='Anchor_link' offset={50} href='#Contact'> <p onClick={()=>{setMenu('Contact')}}>connect with me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar