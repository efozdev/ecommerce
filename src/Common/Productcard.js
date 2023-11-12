import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Productcard({data}) {
    return (
        <Link to={`/details/${data.id}`} >
            <div>
            <div className='productcard'>
                {/* Product 1 */}
                <div className='card'>
                    <img src={data.image} alt='' className='card-img-top' />

                    <div className='card-body text-primary fw-bold position-relative z-0'>
                        {data.title}

                        <div className='shadow position-absolute end-0 rounded-circle d-flex justify-content-center align-items-center bg-dark-subtle  ' 
    style={{height:'3rem', width:'3rem', top: '-0.01rem', zIndex: 10 }}>
        <FaShoppingCart color='red' /> </div>
                    </div>

                    <div className='card-footer'>
                        {data.price}
                    </div>

                </div>

            </div>



        </div>
        </Link>
    )
}

export default Productcard