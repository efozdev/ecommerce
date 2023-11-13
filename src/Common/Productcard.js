import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cart'
import { useDispatch } from 'react-redux'

function Productcard({data}) {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(addToCart())        
    }


    return (
        <Link  to={`/details/${data.id}`} >
            <div>
            <div className='productcard'>
                {/* Product 1 */}
                <div className='card'>
                    <img src={data.images[0]} alt='' className='card-img-top' />

                    <div className='card-body text-primary fw-bold position-relative z-0'>
                        {data.title}

                        <div onClick={() => (handleClick())} className='shadow position-absolute end-0 rounded-circle d-flex justify-content-center align-items-center bg-dark-subtle  ' 
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