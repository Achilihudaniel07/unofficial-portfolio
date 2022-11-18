import React from 'react'
import './EducationPage.css'

function EducationPage() {
    return (
        <div className='education-page' id="education-hd">

            <div className="education-header">
                <h2> EDUCATION</h2> 
            </div>
        
            <div className="education-info">

                <div className="education-imgz">
                    <h2 id="education">EDUCATION</h2>
                </div>
    
                <div className="education-details">

                    <div className="gregory">
                        <h2>GREGORY UNIVERSITY UTURU, ABIA STATE.</h2>

                        <h4> October 2015 – October 2020 | <i>B.Eng. Electrical and Electronics Engineering.</i></h4>
                                                
                        <ul>
                            <li>Graduated with first class honors.</li>
                            <li>Elected assistant course-rep of department.</li>
                            <li>Graduated in top 2% of college and overall best in the department.</li>
                            <li>Majored in power and machines option.</li>
                            <li>Thesis; Design and construction of 1kva inverter.</li>
                        </ul>

                    </div>


                    <div className="city">

                        <h2>CITY ROYAL SECONDARY SCHOOL, NYANYA ABUJA.</h2>

                        <h4>  September 2009 - July 2015 | <i>WASSCE. Secondary School Certificate.</i></h4>
                                            
                        <ul>
                            <li>Member of student jet club.</li>
                            <li>Graduated in top 5% of class.</li>
                        </ul>

                    </div>


                    <div className="nel">

                        <h2>NELSON MANDELA INTERNATIONAL SCHOOL, NYANYA ABUJA.</h2>

                        <h4> September 2006 - July 2009 | <i>Primary School Certificate.</i></h4>

                        <ul>
                            <li>Member of debate club.</li>   
                            <li>Graduated in top 7% of class.</li>
                        </ul>

                    </div>


                    <div className="mar">

                        <h2>MARANATHA NURSERY AND PRIMARY SCHOOL, TRIKANIA KADUNA STATE.</h2>

                        <h4>   September 2002 - July 2006  | <i>Nursery School Certificate. </i></h4>
                                                
                    </div>

                </div>

            </div>

        </div>
    ) 
}
  
export default EducationPage;