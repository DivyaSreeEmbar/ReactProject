import { useRef, useState } from 'react';
import { Col, Dropdown, DropdownButton, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  const ref = useState(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>    <div className="ep-3 mb-2 bg-primary text-white"  >
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid" >
          <div className='left'>
         <ul>
         <li className="nav-item"><a className="nav-link" href="#">UniApply</a></li>
         <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  📍Select City
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
         
         </ul>
   
          </div>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">Explore Schools</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Discover Localities</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Admission Tarcker</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Compare Schools</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <a className="navbar-brand" href="#">🛒Cart</a>
            <button>SignIn</button>
          </div>
        </div>
      </nav>
      <h1>The School Admission Platform</h1>
      <form class="example" style={{'display':'flex','alignItems':'center','justifyContent':'center'}}  >
  <input type="text" placeholder="Search.."  />
  <button type="submit" style={{'borderRadius':'0 40% 40% 0','backgroundColor':'red'}}>Search</button>
</form>
<div>
      <button onClick={handleClick} className='scroll'>Scroll to element</button>
     
    </div>
    </div>
   
<div ref={ref}>Some content here</div>
<div style={{height: '155rem'}} />
   
    </>
   
  );
}
export default Navbar1