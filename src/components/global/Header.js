import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import finance from '../../assets/images/finance-img.png'; 
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export const Header = () => {
    return (
        <div>
           {/* start topbar */}
            <div className="topbar">
             
              <div className="container">

                <div className="row">

                   <div className="col-xl-3 col-lg-3 col-md-2 col-sm-3 col-12">

                    <NavLink exact to="/">
                    <img className="img-fluid logo" src={logo} alt="logo" />
                    </NavLink>    

                   </div>

                   <div className="col-xl-6 col-lg-5 col-md-5 col-sm-1 col-12 pt-md-2">

                   <img className="img-fluid mt-xl-4 mt-lg-5 mt-md-3 finance" src={finance} alt="finance" />

                   </div>

                   <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-12">

                      <a href="tel:407-450-2020" className="btn phone_no mt-lg-5 mt-md-3 mt-sm-3 float-right">

                       <div className="phone_circle mr-md-2"> <span class="fa fa-phone-alt phone-icon text-white"></span> </div> 
                      
                       407-450-2020

                      </a>  

                   </div> 

                </div>

              </div>

            </div>

            {/* end start topbar */}

            <Navbar className="nav-menu" collapseOnSelect expand="lg" bg="primary" variant="light">
            
                <div className="container">
                
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link> <NavLink activeClassName='menu_active' className="text-white" exact to="/"> Home </NavLink>  </Nav.Link>
                
                <Nav.Link> <NavLink activeClassName='menu_active' className="text-white" exact to="/about-us"> About Us </NavLink>  </Nav.Link>

                {/* <NavLink className="text-white" exact to="/about-us">
                <NavDropdown title="About Us" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </NavLink> */}
                <Nav.Link> <NavLink activeClassName='menu_active' className="text-white" exact to="/services"> Painting </NavLink>  </Nav.Link>
                <Nav.Link> <NavLink activeClassName='menu_active' className="text-white" exact to="/testimonial"> Testimonial </NavLink>  </Nav.Link>
                <Nav.Link> <NavLink activeClassName='menu_active' className="text-white" exact to="/project-gallery"> Project Gallery </NavLink>  </Nav.Link>
                <Nav.Link> <NavLink activeClassName='menu_active' className="text-white" exact to="/contact"> Contact Us </NavLink>  </Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link className="social-icon">
                 
                 <a href="!#"> <span className="fab fa-facebook"></span>
                  </a>

                  <a href="!#"> <span className="fab fa-instagram"></span> </a>

                </Nav.Link>
                
                </Nav>
            </Navbar.Collapse> 
                </div>
                
            </Navbar>   

        </div>
    )
}
