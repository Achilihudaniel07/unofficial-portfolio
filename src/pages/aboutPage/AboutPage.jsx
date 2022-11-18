import React from 'react'
import './AboutPage.css'
import daniel from '../../assets/images/daniel.jpg'
// import CustomButton from '../../components/custombutton/CustomButton';

function AboutPage() {
    return (
        <div id="about-hd">

            <div className="about-header">
                <h2> ABOUT ME</h2> 
            </div>

            <div className="about-info">

                <div className='about-imgz'>
                    <img src={daniel} alt="" />
                </div>

                <div className='about-details'>
                    <h2>About Me</h2>
                    <p>
                        Hi, my name is Achilihu Daniel Uchenna, I am an engineer by profession and also the CEO of Daniel A. Online Services, a company in Nigeria. 
                        Currently, I am a website developer and aside from website development,  I also specialize in Graphic Design, Forex trading and Affiliate
                        Marketing with a particular aim of making the digital world a place of ease for my clients. 
                        At a personal level, I am a devoted christian, an Evangelist by calling with lots of scriptural exposures. I am a man of  few words with a reserved, 
                        dedicated, and open-minded personality, a self-motivated and target oriented individual with the ability to work and navigate through ambiguity.
                        I strongly believe that a person should always be close to God and also work on developing themselves      
                        with professional skills by learning new things all the time. This has been my life principle and philosophy guiding me throughout my years 
                        growing up.
                    </p>
                          

                
                    <div className="contact-ab">  

                        <h2>Contact Details</h2>
                        <p> Name: Achilihu Daniel Uchenna</p>
                        <p> Phone: +234 9037231624 or +234 9035007117 </p>
                        <p>Email: <a href="mailto:achilihudaniel53@gmail.com">achilihudaniel53@gmail.com</a> </p>
                        <p> Address: Abuja, Nigeria</p>
                    </div>
                                    
                </div>
                    
              

                
            </div>

      
           
        </div>
    )
}

export default AboutPage