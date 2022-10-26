import React from "react";
import Image  from './Images/blue.png';
function Header() {

    return (

        <div>

            <div className="container">

                <img src={Image} className="responsive" alt="Header" />

            </div>

        </div>

    )

}



export default Header;