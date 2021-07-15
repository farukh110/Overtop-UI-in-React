import React from 'react';
import { OurStory } from './OurStory';
import overTop from '../../assets/images/overtopc.jpg';
import why from '../../assets/images/why.png';
import paint__bucket1 from '../../assets/images/paint-bucket.jpg';
import painter from '../../assets/images/painter.png';
import { ContactForm } from './ContactForm';

export const About = () => {
    return (
        <div>
             <section className="about_banner">

                <div className="container">

                   <h1> ABOUT US </h1> 

                </div>

             </section>

             <OurStory/>

             <section className="who__we__are">

                <div className="row">

                  <div className="col-xl-6 col-lg-6 col-md-12 left__gredient_blue__color pt-md-5 pt-5 pb-md-5 pb-5">

                  <div className="container">

                  
                  <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-12">

                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-12">

                    <h3 className="text-white"> Who We Are </h3>

                    <p className="text-white">
                    Overtop is a family-owned and operated company with over 21 years of expertise in the painting industry.
                    <br /><br />
                    Our knowledgeable and talented crew is committed to producing quality work that gives our clients a superb finished product.
                    <br /><br />    
                    Our goal is to provide the best value for your painting project while maintaining the highest level of customer satisfaction.
                    <br /><br />    
                    We focus on your specific needs producing results that demonstrate our high standards of excellence.
                    <br /><br />    
                    OverTop is not interested in being a quantity driven company but rather a quality driven company.
                    <br /><br />    
                    Through our excellence and integrity, we are focused on building business relationships that create satisfied and long term clients resulting in an Over the Top referral network.
                    </p>   

                    </div>

                  </div>

                  </div>   

                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-12 col-12 p-0">

                    <img className="img-fluid w-100 h-100" src={overTop} alt="Over Top Pc" />

                  </div>  

                </div>

             </section>

             <section className="why__choose__us mt-md-5 mt-5 mb-md-5 mb-5">

               <div className="container">

                  <h3 className="text-center"> Why Choose Us? </h3>

                  <div className="row mt-md-5 mt-3 justify-content-center">

                    <div className="col-xl-4 col-lg-4 col-md-12">

                    <h5 className="text-md-right text-center">
                    Professional Expertise
                    </h5>

                    <p className="text-md-right text-center"> You can feel confident knowing you are hiring
                    one of the most experienced painting crews
                    out there. </p>

                    <h5 className="text-md-right text-center mr-lg-4 mr-md-0">
                    We are Fully Licensed and Insured
                    </h5>

                    <p className="text-md-right text-center mr-lg-4 mr-md-0"> We carry commercial general liabilty and
                    worker’s compensation insurance for your
                    peace of mind. </p>
    
                    <h5 className="text-md-right text-center">
                    Superior Quality
                    </h5>

                    <p className="text-md-right text-center"> We care about the smallest details of your
                    project beacuse details matter. </p>
        

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-10">

                      <img className="img-fluid mt-lg-2 mt-md-3 mx-auto d-block" src={why} alt="why choose use" /> 

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12">

                    <h5 className="text-md-left text-center mt-md-0 mt-4">
                    Clean Work Area
                    </h5>

                    <p className="text-md-left text-center"> We take care of cleaning up at the end of
                    every work day so you won’t have to. </p>

                    <h5 className="text-md-left text-center ml-lg-4 ml-md-0 mt-md-4">
                    On Time
                    </h5>

                    <p className="text-md-left text-center ml-lg-4 ml-md-0"> We will show up at the scheduled time
                    and complete the job efficiently and in
                    a timely manner. </p>

                    <h5 className="text-md-left text-center mt-md-4">
                    On Budget
                    </h5>

                    <p className="text-md-left text-center"> When pricing a project, we price it fairly.
                    Plus no surprise fees when we’re done. </p>
        

                    </div> 

                  </div>   

               </div> 

             </section>

             <section className="contact__form pt-md-5 pt-5 pb-md-5 pb-5">

                <div className="container">

                  <h3 className="text-center mt-md-3"> Contact OverTop Now! </h3>

                  <div className="row justify-content-center">

                        <div className="col-xl-3 col-lg-3 col-md-2 col-10">

                        <img className="img-fluid paint__bucket1" src={paint__bucket1} alt="paint bucket1" />

                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-8 col-12">

                          <ContactForm fname="First Name *" 
                                       lname="Last Name *" 
                                       phone="Phone *" 
                                       email="Email *" 
                                       address="Address *"
                                       city="City *"
                                       GateCode="Gate Code *"
                                       Services="Services Needed *" />

                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-2 col-10">


                        <img className="img-fluid painter" src={painter} alt="painter" />  

                        </div>

                  </div>
                  
                </div>

             </section>
        </div>
    )
}
