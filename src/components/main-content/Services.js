import React from 'react';
import { CallorText } from './CallorText';

export const Services = () => {
    return (
        <>
          <section className="services__banner">

            <div className="container">

            <div className="row">

                <div className="col-lg-6 col-md-8 text-white">
                    <h1> IN NEED OF ANOTHER
                    PROJECT? </h1>
                    <p>
                    No problem!! With over 21 years of expertise in the home
                    improvement industry, we’ve trained our crew to do more
                    than just painting.
                    </p>    

                    <ul className="points">
                        <li> Restoration </li>
                        <li> Drywall Repair </li>
                        <li> Carpentry Work </li>
                        <li> Soffit & Fascia Board Replacement </li>
                        <li> Pressure Washing of Different Surfaces </li>    
                    </ul> 

                </div>

                <div className="col-lg-6 col-md-4">

                </div> 

            </div>

            </div>  

            </section>  

            <CallorText />
        </>
    )
}
