import React from 'react';
import Quotes from '../../assets/images/quotes.png';
import profile from '../../assets/images/profile.svg';
import { ReviewForm } from './ReviewForm';

export const Testimonial = () => {
    return (
        <>
           <section className="mt-md-5 mt-5 mb-md-5 mb-5">

              <div className="container">

                <h3 className="text-center"> TESTIMONIALS </h3>

                <div className="row mt-md-5 mt-5">

                   <div className="col-md-4">

                   <div className="client__content p-4">

<img className="img-fluid" src={Quotes} alt="quotes" />

<p className="mt-md-3">“This past spring I called OverTop. Number one, Marcel was on 
                        time. Number two, did not hurry the job, but his attention to details 
                        very much impressed me, not to mention very friendly. I would call OverTop again 
                        for my home project needs, and I highly RECOMMEND THEM!!”
</p>

        <div className="row">

        <div className="col-md-2">

        <img src={profile} alt="profile" />

        </div>   

        <div className="col-md-10">

        <p className="font-weight-bold"> Camille </p>  
        <p className="client__pro"> Ocoee Homeowner </p>

        </div>   

        </div>

    </div>

                   </div>

                   <div className="col-md-4 mt-md-0 mt-4">

                   <div className="client__content p-4">

                        <img className="img-fluid" src={Quotes} alt="quotes" />

                        <p className="mt-md-3">“Called on OverTop Painting to get a project done 
                        at my townhome. <br /><br />
                        They were prompt, professional, knowledgeable and friendly. 
                        They gave me great advice and with reasonable pricing. I highly recommend 
                        OverTop. Thanks for an awesome service!”
                        </p>

                        <div className="row">

                         <div className="col-md-2">

                           <img src={profile} alt="profile" />

                         </div>   

                         <div className="col-md-10">

                          <p className="font-weight-bold"> Camille </p>  
                          <p className="client__pro"> Ocoee Homeowner </p>

                         </div>   
   
                        </div>

                    </div>

                   </div>

                   <div className="col-md-4 mt-md-0 mt-4">

                   <div className="client__content p-4">

                        <img className="img-fluid" src={Quotes} alt="quotes" />

                        <p className="mt-md-3">“This past spring I called OverTop. Number one, Marcel was on 
                                                time. Number two, did not hurry the job, but his attention to details 
                                                very much impressed me, not to mention very friendly. I would call OverTop again 
                                                for my home project needs, and I highly RECOMMEND THEM!!”
                        </p>

                                <div className="row">

                                <div className="col-md-2">

                                <img src={profile} alt="profile" />

                                </div>   

                                <div className="col-md-10">

                                <p className="font-weight-bold"> Camille </p>  
                                <p className="client__pro"> Ocoee Homeowner </p>

                                </div>   

                                </div>

                            </div>

                   </div> 

                </div>

              </div>  

           </section>  

           <ReviewForm />
        </>
    )
}
