import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_top_left">
                <img src={footer_logo} alt="" />
                <p>i'm frontend developer i have 6month of experience in product based compani like  HashHackCode</p>
            </div>
            <div className="footer_top_right">
                <div className="footer_email_input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='enter your email' name='email' />
                </div>
                <div className="footer_subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer_bottom"> 
            <div className="footer_bottom_left">
                <p>© 2025 Alex bannet.All rights recived</p>
            </div>
            <div className="footer_bottom_right">
                <p>Term of service</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer