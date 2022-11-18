import React from 'react'
import './ProjectPage.css'
import projects from './projects.json'
import { SocialIcon } from 'react-social-icons';
import CustomButton from '../../components/custombutton/CustomButton'

function ProjectPage() {
    return (
        <div className='project-page'id='project-hd'> 

            <div className='project-header'>
                <h2> PROJECT</h2>
            </div>

            <div className='project-info'>
                <div className='project-details'>
                    <h1> A Few of My Latest Works</h1>

                    <p>So far in my web design and development journey, I have engaged in so many basic design to improve my abilities in general. Here are some of the works i have done so far.</p>
                </div>

                <div className='project-images'>
                    {
                        projects.map((project, index) => (
                        <React.Fragment key={index}>
                            <div className='project-imagez'>
                                <img src={project.img} alt={project.name} />
                            </div>
                        
                        </React.Fragment>
                        ))
                    }
                </div>
                <hr />

                <div className='project-links'>
                    <h1>LINKS TO MY WORKS</h1>
                    
                    <span>

                        <p><SocialIcon url="https://joedangoldtech.netlify.app/"  target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://joedangoldconstruction.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://evtop.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://neca-finder.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>
                    
                        <p> <SocialIcon url="https://keshfashionpage.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://keshtodolist.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://keshmanutdplayers.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://keshsnappage.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://keshcounter.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://keshrobotfriends.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>

                        <p><SocialIcon url="https://keshkittenfriends.netlify.app/" target="_blank" rel='noopener noreferrer' style={{width:"60px", height: "40px"}} /></p>                

                    </span>

                </div>

            </div>

                
            <div className="works">
            
                <div className="works-details">
                    <h3>Need a place to learn a skill in tech?</h3>
                    <p>I highly recommend <mark>JOE-DAN Gold Technologies Ltd.</mark> <br /> Daniel A. Online Services has a team of skilled and certified experts and is offering to help anyone who would 
                    like to start a career in tech. Guaranteed.</p>
                </div>

                <div class="works-btn">
                       
                    <a href="https://joedangoldtech.netlify.app/"  target="_blank" rel='noopener noreferrer'> <CustomButton  type={'submit'} content='CHECK OUT' /></a>

                </div>
            </div>

        </div>
    )
}

export default ProjectPage