import React from 'react';
import { ContactForm2 } from './ContactForm2';
import home_img from '../../assets/images/home.svg';
import call__icon from '../../assets/images/call-icon.svg';
import email__icon from '../../assets/images/email.svg';
import clock__icon from '../../assets/images/clock.svg';
import location__icon from '../../assets/images/location.svg';

export const Contact = () => {
    return (
        <>
          <section className="contact__banner">

          <div className="container">

            <h1> CONTACT US </h1> 

          </div>
          
          </section>  

          <section className="contact__page__section mt-md-5 mt-5 mb-md-4 mb-4">

            <div className="container">

              <div className="row justify-content-lg-start justify-content-md-center">

               <div class="col-lg-7 col-md-12">

               <h3> Contact OverTop Now! </h3>

               <ContactForm2 fname="First Name *" 
                                       lname="Last Name *" 
                                       phone="Phone *" 
                                       email="Email *" 
                                       address="Address *"
                                       city="City *"
                                       GateCode="Gate Code *"
                                       Services="Services Needed *" />


               </div>  

               <div class="col-lg-5 col-md-8">

               <img className="img-fluid mx-auto d-block" src={home_img} alt="home" />

               <div className="contact__info__box p-4">

                 <div className="row mt-md-4 mb-md-4">

                   <div className="col-md-1 col-2">

                      <img src={call__icon} alt="call icon" />  

                   </div>

                   <div className="col-md-10 col-10 text-white pl-md-5">

                    <strong> Phone </strong>

                    <p> 1 (407) 450-2020 </p>

                   </div> 

                 </div>

                 <div className="row">

                   <div className="col-md-1 col-2">

                      <img src={email__icon} alt="call icon" />  

                   </div>

                   <div className="col-md-10 col-10 text-white pl-md-5">

                    <strong> Email </strong>

                    <p> contact@overtopnc.com </p>

                   </div> 

                 </div>

                 <div className="row">

                   <div className="col-md-1 col-2">

                      <img src={clock__icon} alt="call icon" />  

                   </div>

                   <div className="col-md-10 col-10 text-white pl-md-5">

                    <strong> Office Hours </strong>

                    <p> Monday-Saturday 9 am- 6:00 pm
                    Sunday- Closed </p>

                   </div> 

                 </div>

                 <div className="row">

                   <div className="col-md-1 col-2">

                      <img src={location__icon} alt="call icon" />  

                   </div>

                   <div className="col-md-10 col-10 text-white pl-md-5">

                    <strong> Address </strong>

                    <p> Orlando, FL United States </p>

                   </div> 

                 </div>

               </div>

               </div>

              </div>  

            </div> 

          </section>
        </>
    )
}
