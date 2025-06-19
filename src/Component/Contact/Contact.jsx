import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import Mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import Location from '../../assets/location_icon.svg'



export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b2641ea8-3415-4854-b8c0-3c6bb2dca49c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert ("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <div  id='Contact' className='contact'>
     <div className="contact_title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
     </div>
     <div className="contact_section">
        <div className="contact_left">
            <h1>let's talk</h1>
            <p>i'm currently available to take on new project,so feel free to send me a messange about anything that you want</p>
            <div className="contact_details">
                <div className="contact_detail">
                <img src={Mail} alt="" /><p>barathsankar8787@gmail.com</p>
                </div>
                <div className="contact_detail">
                <img src={call} alt="" /><p>+91 9787276012</p>     
                </div>
                <div className="contact_detail">
                <img src={Location} alt="" /><p>Velachery,Chennai-48</p>   
                </div>
            </div>
            
        </div>
        <form onSubmit={onSubmit} className='contact_right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='enter your name' name='name'/>
                 <label htmlFor="">Your Gmail</label>
                <input type="email" placeholder='enter your Gmail' name='Gmail'/>
                <label htmlFor="">Your Message</label>
                <textarea name="message" id="" cols="8"></textarea>
                <button type='submit'  className='contact_submit'>Submit now</button>
            </form>
     </div>
    </div>
  )
}

