import React from 'react'
import './ContactPage.css'
import CustomButton from '../../components/custombutton/CustomButton'
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import address from '../../assets/images/address.png'
import Footer from '../../components/footer/Footer';




function ContactPage() {
   
    // const [data, setData] = useState({});

    function contactDetails(event) {
        // const { name, value } = event.target
        // const newData = { ...data }
        // newData[name] = value;
        // setData(newData);
        // console.log(newData)
    }

    return (

        <div className='contact-page' id='contact-hd'>
      
            <div className='contact-us-header'>
                <h2>CONTACT ME</h2>
            </div>

            <div className='contact-info'>

                <div className='know-us-better'>
                    <h1>Would you like to reach out to me ?</h1>
                </div>

                <div className='phone-email-address'>
                    <div className='phone-id'>
                        <img src={phone} alt="phone" />
                        <div className='ph-em-ad'>
                            <h2>Phone:</h2>
                            <p>+234 9037231624 or <br /> +234 9035007117</p>
                        </div>
                    </div>

                    <div className='email-id'>
                        <img src={email} alt="email" />
                        <div className='ph-em-ad'>
                            <h2>Email:</h2>
                            <p>  
                                <a href="achilihudaniel53@gmail.com ">achilihudaniel53@gmail.com </a>
                            </p>
                    </div>
    
                    </div>                      

                    <div className='address-id'>
                        <img src={address} alt="address"/>
                        <div className='ph-em-ad' id='address-cp'>
                            <h2>Address:</h2>
                            <p> Federal Capital Territory,
                                <br /> Abuja, Nigeria.</p> 
                        </div>
                    </div>

                </div>

                <div className="contact-container">
                    <div className='contact-details'>
                        
                        <form action="" className='contact-page-form'> 
                            <div className='get-in-touch'>
                                <h1>Get in touch with me</h1>
                                <p>   Have a new job proposal in mind? Let's collaborate and build something 
                                awesome. Let's turn that idea to an even greater product.- please fill up the form below and I will contact you shortly.</p>
                            </div>

                            <div className='name-phone-email-mes'>
                                <div className='name'>
                                    <input className='fme-input' type='text' name='fullName' placeholder='Name'/> 
                                </div>

                                <div className='phone'>
                                    <input className='fme-input' type='phone' name='phone' placeholder='Phone'/>
                                </div>

                                <div className='email-address'>
                                    <input className='fme-input' onChange={contactDetails}  name='email' type='email' placeholder='Email ' />
                                </div>
                            
                                <div className='message'>
                                    <textarea  id="message-input" onChange={contactDetails} name="message" cols="30" rows="10" placeholder='Message....'></textarea>
                                </div>

                            </div>


                            <div className='cn-send-message'>
                                <CustomButton  type={'submit'} content='SEND' />
                            </div>

                        </form>  

                        <div className='map'>        
                            <div class="gmap_canvas">        
                                <div class="mapouter">
                                    <div class="gmap_canvass">
                                        <iframe title='iframez' width="600" height="500" id="gmap_canvasss" src="https://maps.google.com/maps?q=itf%20house%20abuja%20nigeria&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe>
                                    </div>   
                                </div>   
                            </div>

                        </div>   

                    </div>

                </div>

            </div>

            <div>
                <Footer/>
            </div>

        </div>

    )
}

export default ContactPage