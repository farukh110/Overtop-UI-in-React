import React from 'react';
import { Quote } from './Quote';
import Exterior from '../../assets/images/Exterior.jpg';
import Interior from '../../assets/images/Interior.jpg';

export const Home = () => {
    return (
        <div>
            
            <section className="home__banner">

              <div className="container">

                <div className="row">

                   <div className="col-lg-6 col-md-8">
                       <h1> NEED PAINTING? </h1>
                       <p>
                        We can help!!! A fresh coat of paint can make a huge difference,
                        and help transform your place into a bright, and beautiful space.
                        At OverTop, we get your paint done right every time to transform
                        your space into something you love.
                       </p>    

                        <ul className="points">
                            <li> Interior/Exterior Residential and Commercial Painting </li>
                            <li> Touch-up Painting </li>
                            <li> Cabinet Refinishing </li>
                            <li> Drywall Repair </li>
                            <li> Garage Door Spray Painting </li>
                            <li> Wood Staining </li>
                            <li> Roof Painting </li>    
                        </ul> 

                   </div>

                   <div className="col-lg-6 col-md-4">

                   </div> 

                </div>

              </div>  

            </section>

            <section className="services">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                          <div className="service__content">

                            <img className="img-fluid w-100" src={Exterior} alt="What our Exterior Painting services include:" />

                            <div className="pl-md-3 pr-md-3">

                            <h4 className="mt-md-4 mt-3 ml-md-2 ml-3"> What our Exterior Painting <br />
                                 services include: </h4>

                                 <ul class="points mt-md-3 mt-3 pb-md-5 pb-5">
                                    <li> Pressure Cleaning of all surfaces prior to be painted </li>
                                    <li> Coverage to protect your plants and walkways </li>
                                    <li> Protection of windows and sliding door </li>
                                    <li> Minor repairs </li>
                                    <li> Patching and caulking </li>
                                    <li> Clean up at completion </li>
                                    <li> Pressure Washing </li></ul>

                                    <a href="!#" className="btn btn-red text-white"> GET A QUOTE NOW </a>     
   
                            </div>    

                            
                          </div>

                        </div>

                        <div className="col-md-6 mt-md-0 mt-5">

                        <div className="service__content2">

                            <img className="img-fluid w-100" src={Interior} alt="What our Exterior Painting services include:" />

                            <div className="pl-md-3 pr-md-3">

                            <h4 className="mt-md-4 mt-3 ml-md-2 ml-3"> What our Interior Painting <br />
                                 services include: </h4>

                                <ul class="points2 mt-md-3 mt-3 pb-md-5 pb-5">
                                    <li> Remove light switch covers </li>
                                    <li> Covering of all furnitures and floors to protect against accidental spills </li>
                                    <li> Minor repairs as needed </li>
                                    <li> Patching and caulking as needed </li>
                                    <li> Sanding as needed </li>
                                    <li> Clean up at completion </li>
                                    </ul>

                                    <a href="!#" className="btn btn-blue text-white"> GET A QUOTE NOW </a>     

                            </div>    


                            </div>

                        </div>

                    </div>

                </div> 

            </section>

            <Quote/>

        </div>
    )
}
