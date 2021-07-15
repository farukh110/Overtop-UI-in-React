import React from 'react';
import ourStory__img from '../../assets/images/our-story.png';

export const OurStory = () => {
    return (
        <>
          <section className="our__story mt-md-5 mt-5">

            <div className="container">

                <div className="row justify-content-center">

                   <div className="col-xl-7 col-lg-7 col-md-12">

                     <h3 className="mt-md-5 text-md-left text-left"> Our Story/ How Did It All Start </h3>   

                     <p>
                     My name is Marcelino but I’m called by my nickname, Marcel.
                     I moved from Brazil to the U.S in 1989. Didn’t know any English back then 
                     but with just a few weeks in the country knocking at every business door looking 
                     for work I was soon hired to work as a parking attendant at a parking lot in Manhattan 
                     NY. About 2 years or so into working there I was promoted into the managing position.
                     <br/><br/>   
                     I got to meet the love of my life in 1994 and got married in March of 1996. Soon after 
                     getting married, I realized 2 things: 1) how good I was at handling Home Improvement 
                     projects and 2) how kind, friendly, and polite my wife was. I knew right off the bat 
                     that she and I together, formed a great team, so I thought: “Why not start my own business 
                     and work alongside my lovely bride? I can execute the work and she can be my administrative 
                     assistant”.

                     </p>  

                   </div>

                   <div className="col-xl-5 col-lg-5 col-md-7">

                       <img className="img-fluid" src={ourStory__img} alt="our story" /> 

                   </div> 

                   <div className="col-xl-12 col-lg-12 col-md-12 mt-md-3 mt-3">

                    <p> then used all the savings I had buying books and VHS tapes at Home Depot that would teach 
                    on Home Improvement projects (this is back in the day where there was no Youtube or Google to 
                    search for tutorials).    I remember watching the VHS videos and reading those books repeatedly, 
                    over and over again. When my first child was born I felt compelled to quit my manager’s position 
                    and just go for my dream of starting my own Home Improvement company.

                    <br/><br/>  

                    Eventually, down the path, I decided to specialize in Interior and Exterior Painting. Throughout 
                    this whole journey, I’ve always had the privilege of having my wife by my side assisting me as my 
                    administrative assistant. Together we’ve served our clients for 21+ years with dedication and excellence 
                    and have built many strong business relationships. </p>   

                    <div className="row">

                     <div className="col-xl-2 col-lg-2 col-md-3 col-6">

                     <a href="!#" className="btn btn-red text-white mt-md-2 mt-3 mb-2 mb-5 btn-block"> CONTACT US </a>
   
                     </div>       

                    </div>

                   </div>

                </div>

            </div>

          </section>  
        </>
    )
}
