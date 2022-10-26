import React from 'react'

function Navbar() {
  return (
    <div>
     <div>
     {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">UNIAPPLY</a>
          </div>
          <ul className="nav navbar-nav">

            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Select City <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Hyderabad</a></li>
                <li><a href="#">Secundrabad</a></li>
                <li><a href="#">Warangal</a></li>
         </ul>
         </li>
          
            <li className="active">
              <a href="#">Explore Schools</a></li>
            <li><a href="#">Discover Localites</a></li>
            <li><a href="#">Admission Tracker</a></li>
            <li><a href="#">Compare Schools</a></li>
            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Resources <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Hyderabad</a></li>
                <li><a href="#">Secundrabad</a></li>
                <li><a href="#">Warangal</a></li>
              </ul>
            </li>
          </ul>
          
        </div>
      </nav>
      ))}
    </div>
    
    </div>
  )
}

export default Navbar
