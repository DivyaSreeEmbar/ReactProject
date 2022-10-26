import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import Image from './Images/uni.jpg'


function NavbarReact() {
  return (

    <div className='container-fluid'>
      <div className='hello'>
          <Navbar expand="xl" variant="light" top="fixed"  >
          {/* <Navbar class="navbar navbar-expand-lg navbar-dark bg-dark"> */}
          <h1>
            <Container  >
              <h3><img src={Image} height={75} width={175} alt='uniapply' /></h3>
               </Container>
          </h1>

          <Container className='color'>
            <h3> <NavDropdown title="Select City" id="basic-nav-dropdown">
              <h3> <NavDropdown.Item href="#action/3.1">Hyderabad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">  Secundrabad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Warangal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Other Cities
                </NavDropdown.Item></h3>
            </NavDropdown></h3>
          </Container>
          
          <Container className='color'>
            <Container className='color'>
              <Nav.Link href="#ExploreSchools"><h3>ExploreSchools</h3></Nav.Link>
            </Container>
            <Container className='color'>
              <Nav.Link href="#DiscoverLocalites"><h3>DiscoverLocalites</h3></Nav.Link>
            </Container>
            <Container className='color'><Nav.Link href="#AdmissionTracker"><h3>AdmissionTracker</h3></Nav.Link>
            </Container>
            <Container>
              <Nav.Link href="CompareSchools"><h3>CompareSchools</h3></Nav.Link></Container>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </Container>
          <Container className='color'>
            <h3>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <h3> <NavDropdown.Item href="#action/3.1">Knowledge Bank</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Reimagine</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">FacetoFaceSin</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Knowledge Bank</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Reimagine</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">FacetoFaceSin</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Other Cities
                  </NavDropdown.Item></h3>
              </NavDropdown>
            </h3>

          </Container>
          <Container className='color'>
            <h3>
              <i class="bi bi-cart-fill">Cart</i>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg></h3>
          </Container>


          <div>
            <Form className="d-flex">
              <Container className='color'><Button variant="light" size="lg">Signin<br></br></Button></Container>

            </Form>
          </div>

        </Navbar>

        <center><h1>The School Admission Platorm</h1></center>
        <Container className='color'>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <InputGroup className="mb-3" width>
                <Form.Control
                  placeholder="Search Schools"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  style={{ borderRadius: "15px" }}
                />
                <Button variant="danger" id="button-addon2">
                  Search Button
                </Button>
              </InputGroup>
              <div align="right">
                <img src="bulb.jpg" width="20px" height="20px" />
                How uniApply works
              </div>
            </Col>
            <Col md="3"></Col>
          </Row>
          < div align="center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>

          </div>
        </Container>

      </div>

    </div>



  )
}

export default NavbarReact
