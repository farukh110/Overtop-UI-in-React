import React from 'react';

export const ReviewForm = () => {
    return (
        <>
          <section className="review__form pt-md-5 pt-5 pb-md-5 pb-2">

            <div className="container">

               <h3 className="text-center text-primary"> Your Review is Important for Us! </h3> 

               <p className="text-center"> Please complete the form below and send us your testimonial. </p>

               <div className="row mt-md-5">

                  <div className="col-md-2">

                  </div>

                  <div className="col-md-8">

                  <form>

                    <h5 className="text-danger"> Leave Feedback For OverTop, LLC. </h5>

                    <p> Fields marked with an * are required </p>

                    <div className="row">

                        <div className="col-md-6">

                          <label className="font-weight-bold" htmlFor="">
                            First Name * </label>    
                            <input className="form-control" type="text" />

                        </div>

                        <div className="col-md-6">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            Last Name * </label>    
                            <input className="form-control" type="text" />
  
                        </div>

                        <div className="col-md-12 mt-md-4">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            Email * </label>    
                            <input className="form-control" required type="email" />
  
                        </div>

                        <div className="col-md-12 mt-md-4 mt-4">

                        <label className="font-weight-bold" htmlFor="">
                            How do you rate our professionalism? </label>    

                            <br />

                            <div className="row">

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">
                             <input type="radio" value="Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                            </div>

                            <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            How do you rate our timeliness? </label>    

                            <br />

                            <div className="row">

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">
                             <input type="radio" value="Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                            </div>

                            <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            How do you rate our quality? </label>    

                            <br />

                            <div className="row">

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">
                             <input type="radio" value="Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                            </div>

                            <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            How do you rate our convenience? </label>    

                            <br />

                            <div className="row">

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">
                             <input type="radio" value="Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                            </div>

                            <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            How do you rate our customer service? </label>    

                            <br />

                            <div className="row">

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">
                             <input type="radio" value="Satisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                            
                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                             <div className="col-md-3 col-6">

                             <input type="radio" value="Very Unsatisfied" name="value" placeholder="Very Satisfied" /> Very Satisfied
                             

                             </div>

                            </div>
                        </div>

                        <div className="col-md-12 mt-md-4">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            Based on your experience, how likely are you to recommend us to a friend or relative? </label>    
                            <input className="form-control" required type="text" />
  
                        </div>

                        <div className="col-md-12 mt-md-4">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            Any additional Feedback? </label>    
                            
                            <textarea className="form-control" required rows="5"></textarea>

                        </div>

                        <div className="col-md-12 mt-md-4">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            City </label>    
                            <input className="form-control" required type="text" />
  
                        </div>

                        <div className="col-md-12 mt-md-4">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            State </label>    
                            <input className="form-control" required type="text" />
  
                        </div>

                        <div className="col-md-12 mt-md-4">

                        <label className="font-weight-bold mt-md-0 mt-4" htmlFor="">
                            Review Title </label>    
                            <input className="form-control" required type="text" />
  
                        </div>

                        <div class="col-xl-2 col-lg-2 col-md-3 col-6">
                        
                        <button type="submit" class="btn btn-red text-white mt-md-4 mt-3 mb-2 mb-5 btn-block"> Submit </button>
                        
                        </div>
                        
                        </div>

                        </form>

                    </div>

                  </div> 

                  <div className="col-md-2">

                  </div>  

               </div>
               
            
          </section>  
        </>
    )
}
