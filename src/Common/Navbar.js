import React, { useState } from 'react'
import cartlogo from './../cartlogo.png'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from 'react-redux'

function Navbar() {

  const total = useSelector((state) => state.cart.total)

  // const [total, setTotal] = useState(0)

  // function change(){
  //   setTotal(total + 1)    
  // }


  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-warning ">
        <div className="container">
          <Link className="navbar-brand" to={"/"}> <img src={cartlogo} alt="logo" /> </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <Link className='nav-link ' to={"/"}>Home</Link>
              <Link className='nav-link ' to={"/Login"}>Login</Link>
            </ul>


            {/* <Link to={'/Cart'} className='position-relative p-2'>
              <sub className='p end-0 position-absolute top-0 text-white rounded-circle bg-dark p-2'>10</sub>
              <FaShoppingCart size={36} />
            </Link> */}
            
                <Link to={"/Cart"} className='cart'><BsCart3 size={25} color='red'/></Link>
                <span className="cartlogo">{total}</span>
            {/* end navbar-right */}

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar