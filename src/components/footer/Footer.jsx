import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return (
        <div className='footer'> 

            <footer>
                <hr id="footerhr"/>
                                     
                <div className="footer-info">
                    
                    <div className='footer-details'>
                        <p> © Copyright Daniel A. Online Services 2022  |  Developed by   <a href="https://api.whatsapp.com/send?phone=+2349035007117&text=Thank%20you%20for%20contacting%20me"  target="_blank" rel='noopener noreferrer'>Achilihu Daniel Uchenna</a> 
                        </p>

                    </div>
                    
                    <div className='footer-links'>
                        <SocialIcon url="https://github.com/Achilihudaniel07" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} />
                        
                        <SocialIcon url="https://linkedin.com/in/daniel-u-achilihu-633161150/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} />

                        <SocialIcon url="https://twitter.com/dan__kesh77" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}}/>

                        <SocialIcon url="https://instagram.com/dan__kesh77" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}}/>

                        <SocialIcon url="https://www.facebook.com/daniel.achilihu.9" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}}/>
                        
                        <SocialIcon url="https://api.whatsapp.com/send?phone=+2349035007117&text=Thank%20you%20for%20contacting%20me" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}}/>
                        
                    </div>

                               
                </div>

            </footer>

        </div>
    )
}

export default Footer