import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className="cart">
    <div class="table-responsive mt-4 container ">
        <table class="table border">
            <thead>
                <tr style={{ borderBottom: "5px solid " }}>
                    <th scope="col">Image</th>
                    <th scope="col">Product Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td > <Link to={"/Details"}><img src="./../../images/sneakers.jpeg" alt="" /></Link>  </td>
                    <td>Sneakers</td>
                    <td>N35000</td>
                    <td>1</td>
                    <td><RiDeleteBin6Line /></td>

                </tr>
                <tr class="">
                    <td><Link to={"/Details"}><img src="./../../images/pair-trainers.jpg" alt="" /></Link></td>
                    <td>Trainers</td>
                    <td>N12500</td>
                    <td>1</td>
                    <td><RiDeleteBin6Line /></td>
                </tr>

            </tbody>
        </table>
        <div className='container my-5'>
            <h3>Subtotal:₦<span className='text-danger'>47,500</span></h3> 
            <p>Taxes and shipping will calculated at checkout</p>
        </div>
        <div className='container my-5'> 
        <button className='btn btn-danger p-2'>Continue Shopping</button>
        <button className='btn btn-danger mx-2 p-2'>Process to Checkout</button>
    </div>
    </div>
</div>
  )
}

export default Cart