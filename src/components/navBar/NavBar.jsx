import React, { useState} from 'react';
import "./NavBar.css";
import { MdCancel} from "react-icons/md";
import { Link } from "react-router-dom";
import menu from "../../assets/images/menu.png";
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


// To toggle and make navbar show menu

export default function NavBar({ currentPage }) {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  };
  window.addEventListener('scroll', changeNav)
  
  function page(page) {
    if (page === currentPage) return {
      borderBottom: " none",
      
    };
    return {};
  }
  
  const shower = () =>{
    setShow(!show);
  }
  

  // To make the scroll bar return to top of page

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', 
      });
    }, [pathname]);
  
    return null;
  }
  


  
  
    return (
        <div className= {show ? 'opacity' : ''}>
            <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>

                <div className='contact-details-container'>
                    <div className='m-phone'>
                        <img src={phone} alt="phone" style={{width:'30px', height:'25px'}} />
                        <p>+234 09037231624 </p>
                    </div>

                    <div className='m-email'>
                        <img src={email} alt="phone" style={{width:'30px', height:'25px'}}/>
                        <p>achilihudaniel53@gmail.com </p> 
                    </div>

                </div>


            
                <div className='j-d-navbar'>
            
                    <div className='navigation-items'>
                        <a href='#home-hd' onClick={ScrollToTop()} pathname='#home-hd'>
                            <p>HOME</p>
                        </a>

                        <a href='#about-hd' onClick={ScrollToTop()} pathname='#about-hd'>
                            <p>ABOUT</p>
                        </a>

                        <a href='#career-hd' onClick={ScrollToTop()} pathname='#career-hd'>
                            <p>CAREER</p>
                        </a>

                        <a href='#education-hd' onClick={ScrollToTop()} pathname='#education-hd'>
                            <p>EDUCATION</p>
                        </a>
                        

                        <a href='#skills-hd' onClick={ScrollToTop()} pathname='#skills-hd'>  
                            <p>SKILLS</p>
                        </a>

                        <a href='#contact-hd' onClick={ScrollToTop()} pathname='#contact-hd'>  
                            <p>CONTACT ME</p>
                        </a>

                    </div>



                    <div className='nav-menu'>
                        <div className="links-section">
                        <img src={menu} alt="menu" className='menu' onClick={shower} />
                        <div className={!show ? 'links show' : 'links'}>
                            <p onClick={shower} style = {{cursor: 'pointer'}} className = 'exit'><MdCancel size = {55} style={{marginTop:'30px'}}/></p> 
                        
                             <p>
                            <Link to='/' className='link' style={page("Home")} > <p>HOME</p></Link>

                            <Link to='/about' className='link' style={page("about")} > <p>ABOUT</p></Link> 
                            
                            <Link to='/projects' className='link' style={page("project")} > <p>PROJECT</p></Link> 
                            
                            <Link to='/staff' className='link' style={page("staff")} > <p>STAFF</p></Link> 
                            
                            <Link to='/contactus' className='link' style={page("contact")} > <p>CONTACT US</p></Link> 
                            
                            <Link to='/faq' className='link' style={page("FAQ")} > <p>FAQ</p></Link> 
                            </p> 

{/* 
                            <a href='#home-hd' onClick={ScrollToTop()} pathname='#home-hd'  className='link' style={page("HOME")}>
                                <p>HOME</p>
                            </a>

                            <a href='#about-hd' onClick={ScrollToTop()} pathname='#about-hd'  className='link' style={page("ABOUT")}>
                                <p>ABOUT</p>
                            </a>

                            <a href='#career-hd' onClick={ScrollToTop()} pathname='#career-hd'  className='link' style={page("CAREER")}>
                                <p>CAREER</p>
                            </a>

                            <a href='#education-hd' onClick={ScrollToTop()} pathname='#education-hd'  className='link' style={page("EDUCATION")}>
                                <p>EDUCATION</p>
                            </a>
                          

                            <a href='#skills-hd' onClick={ScrollToTop()} pathname='#skills-hd'  className='link' style={page("SKILLS")}>  
                                <p>SKILLS</p>
                            </a>

                            <a href='#contact-hd' onClick={ScrollToTop()} pathname='#contact-hd'  className='link' style={page("CONTACT ME")}>  
                                <p>CONTACT ME</p>
                            </a>

                            <a href='#faq-hd' onClick={ScrollToTop()} pathname='#faq-hd'  className='link' style={page("FAQ")}>  
                                <p>FAQ</p>
                            </a> */}

                            
                        </div>
                        </div>
                    </div>
                        

                </div>

            </nav>
        </div>
    )
}
