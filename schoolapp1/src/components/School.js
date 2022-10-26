import React from 'react'
import Image from './Images/uni.jpg'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Footer from 'react-bootstrap'
function School() {
    return (
        <div>

        <div className="p-3 mb-2 bg-primary text-white"  >
        
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid" >
                    <div className='left'>
                        <h3><img src={Image} height={75} width={175} alt='uniapply' /></h3>
                    </div>
                    <div>
                        <ul>
                            <h3> <NavDropdown title="Select City" id="basic-nav-dropdown">
                                <h3> <NavDropdown.Item href="#action/3.1">Hyderabad</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">  Secundrabad</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Warangal</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Other Cities
                                    </NavDropdown.Item></h3>
                            </NavDropdown></h3>
                        </ul>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li> <Nav.Link href="#ExploreSchools"><h3>ExploreSchools</h3></Nav.Link></li>


                            <li>   <Nav.Link href="#DiscoverLocalites"><h3>DiscoverLocalites</h3></Nav.Link></li>

                            <li><Nav.Link href="#AdmissionTracker"><h3>AdmissionTracker</h3></Nav.Link></li>

                            <li><Nav.Link href="CompareSchools"><h3>CompareSchools</h3></Nav.Link></li>
                        </ul>

                        <i class="bi bi-cart-fill">Cart</i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>


                        <Form className="d-flex">
                            <Button variant="light" size="lg">Signin<br></br></Button>
                        </Form>
                    </div>

                </div>


            </nav >
            </div>
            <div>

            </div>
            {/* <Footer color="primary" bgColor='light' 
            className='text-center text-lg-left'>
                <h5 className='text-uppercase'>
                Footer Heading</h5>
                <p>
                    MDBootstrap is a Material Design and 
                    bootstrap-based react UI library that 
                    is used to make good looking webpages 
                    with its seamless and easy-to-use component.
                </p>
  
            </Footer> */}


        </div >
    )
}

export default School
