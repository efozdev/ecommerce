import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function Productcardtwo() {
  return (
    <div>
        {/* Product 2 */}
        <div className='productcard'>
           <div className='card'>
           <img src={'./../../images/sneakers.jpeg'} alt='sneakers' className='card-img-top'/>
           
           <div className='card-body text-primary fw-bold position-relative z-0'>
            Nike Sneaker

            <div className='shadow position-absolute end-0 rounded-circle d-flex justify-content-center align-items-center bg-dark-subtle  ' 
    style={{height:'3rem', width:'3rem', top: '-0.01rem', zIndex: 10 }}>
        <FaShoppingCart color='red' /> </div>
           </div>

            <div className='card-footer'>
                N35,000
            </div>

           </div>

        </div>

    </div>
  )
}

export default Productcardtwo