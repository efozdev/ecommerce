import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-warning'>
            <div className='container'>
                <div className='row'>
                    {/* first columns */}
                    <div className='col-md-3'>
                        <h6>Contact</h6>
                        <small>No. 86 Olowora road Berger, Off Ojodu Lagos.</small>
                    </div>
                    {/* second column */}
                    <div className='col-md-3'>
                        <h6>Menu</h6>
                        <Link className='nav-link' to={"/"}>Home</Link>
                        <Link className='nav-link' to={"/Login"}>Login</Link>
                        <Link className='nav-link' to={"/Signup"}>Signup</Link>
                    </div>
                    {/* third column */}
                    <div className='col-md-3'>
                        <h6>Company</h6>
                        <Link className='nav-link' to={"#"}>Menu</Link>
                        <Link className='nav-link' to={"#"}>Terms & Conditions</Link>
                        <Link className='nav-link' to={"#"}>Privacy Policy</Link>
                    </div>
                    {/* forth column */}
                    <div className='col-md-3'>
                        <h6>Social Media</h6>

                        <Link className='nav-link'><FaFacebook />Facebook</Link>
                        <Link className='nav-link'><FaXTwitter />Twitter</Link>
                        <Link className='nav-link'><FaInstagram />Instagram</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer