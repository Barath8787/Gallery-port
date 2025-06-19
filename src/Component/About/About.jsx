import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/about_profile.svg'
import './About.css'
function About() {
    return (
        <div id='About me' className='about'>
            <div className="about_title">
                <h1>About me</h1>
                <img src={theme} alt="" />
            </div>
            <div className='about_sections'>
                <div className="about_left"><img src={profile} alt="" /></div>
                <div className="about_right">
                    <div className="about_para">
                        <p>Highly motivated and detail-oriented front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.js.</p>
                        <p>Specialize in building responsive, user-friendly web applications with a passion for learning new technologies
                            and frameworks. Demonstrate strong problem-solving abilities and collaborate effectively in team environments.
                            Eager to apply academic knowledge and practical experience to contribute to innovative web development projects.
                        </p>
                    </div>
                    <div className='about_skills'>
                        <div className="about_skill"><p>HTML&CSS</p> <hr style={{ width: "95%" }} /></div>
                        <div className="about_skill"><p>JAVASCRIPT</p> <hr style={{ width: "65%" }} /></div>
                        <div className="about_skill"><p>REACT JS</p><hr style={{ width: "105%" }} /></div>
                        <div className="about_skill"><p>NODEJS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>

            </div>
            <div className="about_achievements">
                <div className="about_achievement">
                    <h1>1</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about_achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLITED</p>
                </div>
                <hr />
                <div className="about_achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About