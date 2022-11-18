import React from 'react'
import './HomePage.css'
import NavBar from '../../components/navBar/NavBar';
import { SocialIcon } from 'react-social-icons';


function HomePage() {
    return (   
        <div className="home-page">
        
            <div id='home-hd'>
                <NavBar/> 
            </div>
            
            <div className="home-info">

                <div className='home-details'>
                    <div className="home-intro">
                        <h1>I'm Achilihu Daniel <br /> Uchenna.</h1>
                        <p>
                            I'm an <em>Evangelist</em> ,  <em>Electrical electronics engineer</em> , <em>Website developer</em> and  <em>Graphic designer </em>creating and delivering awesome and
                            effective online services for individuals and companies of all sizes around the world. Start scolling and learn more about me and my works.
                        </p>
                    </div>

                    <hr />
                    <div className="social-links">
                        
                        <SocialIcon url="https://github.com/Achilihudaniel07" target="_blank" style={{width:"60px", height: "40px"}} />
                        
                        <SocialIcon url="https://linkedin.com/in/daniel-u-achilihu-633161150/" target="_blank" style={{width:"60px", height: "40px"}} />

                        <SocialIcon url="https://twitter.com/dan__kesh77" target="_blank" style={{width:"60px", height: "40px"}}/>

                        <SocialIcon url="https://instagram.com/dan__kesh77" target="_blank" style={{width:"60px", height: "40px"}}/>

                        <SocialIcon url="https://www.facebook.com/daniel.achilihu.9" target="_blank" style={{width:"60px", height: "40px"}}/>
                        
                        <SocialIcon url="https://api.whatsapp.com/send?phone=+2349037231624& text=Thank%20you%20for%20contacting%20me" target="_blank" style={{width:"60px", height: "40px"}}/>
                    </div>

                
                </div>
                
            </div>

        </div>

    )
}

export default HomePage