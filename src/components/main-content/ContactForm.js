import React from 'react';

export const ContactForm = ({fname, lname, phone, email, address, city, GateCode, Services}) => {
    return (
        <>

          <form className="mt-md-3" action="">
          
          <div className="row justify-content-center">

            <div className="col-lg-6 col-md-6">

              <input className="form-control" type="text" placeholder={fname} />  

            </div>

            <div className="col-lg-6 col-md-6 mt-md-0 mt-3">

            <input className="form-control" type="text" placeholder={lname} />  

            </div>

            <div className="col-lg-6 col-md-6 mt-md-3 mt-3">

            <input className="form-control" type="text" placeholder={phone} />

            </div>

            <div className="col-lg-6 col-md-6 mt-md-3 mt-3">

            <input className="form-control" type="email" placeholder={email} />

            </div>

            <div className="col-lg-6 col-md-6 mt-md-3 mt-3">

            <input className="form-control" type="text" placeholder={address} />

            </div>

            <div className="col-lg-6 col-md-6 mt-md-3 mt-3">

            <input className="form-control" type="text" placeholder={city} />

            </div>

            <div className="col-md-12 mt-md-3 mt-3">

            <input className="form-control" type="text" placeholder={GateCode} />

            </div>

            <div className="col-md-12 mt-md-3 mt-3">

            <textarea className="form-control" rows="4" placeholder={Services}></textarea>

            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-6 mt-md-3 mt-2">

            <button type="submit" class="btn btn-red text-white mt-md-2 mt-2 mb-2 mb-4 btn-block"> SUBMIT </button>
            
            </div>

          </div>  
          </form>
        </>
    )
}
