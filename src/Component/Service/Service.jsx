import React from 'react'
import './Service.css'
import theme from '../../assets/theme_pattern.svg'
import service_Data from '../../assets/services_data'
import Arrow from '../../assets/arrow_icon.svg'
function Service() {
    return (
        <div  id='Services' className="services">
            <div className='service_title'>
                <h1>My service</h1>
                <img src={theme} alt="" />
            </div>
            <div className="service_container">
                {service_Data.map((service,index)=>{
                    return(
                          <div key={index} className="service_format">
                      <h3>{service.s_no}</h3>
                      <h2>{service.s_name}</h2>
                      <p>{service.s_desc}</p>
                      <div className="service_readmore">
                        <p>Read More</p>
                        <img src={Arrow} alt="arrow icon" />
                      </div>
                    </div>
                    )
                  
                })}
            </div>
        </div>

    )
}

export default Service