import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Productcard from '../Common/Productcard';
// import Productcardtwo from '../Common/Productcardtwo';
// import Productcardthree from '../Common/Productcardthree';
import axios from 'axios';

function Home() {

  const [products, setProducts] = useState([])

useEffect(() => {
  axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
  .then((res) => setProducts(res.data))
},[])


  function calculate() {
    let a = 4;
    let b = 50;
    let c = a + b;

    c === 9 ? alert("9") : alert("incorrect");

  }

  // function hw() {
  //   for (let i = 0; i < 2; i++) {
  //     alert("hello world")

  //   }
  // }

  // const products = [
  //   { id: 1, title: 'Blue Jeans', price: 10000, img: './../../images/jeans.jpg' },
  //   { id: 2, title: 'Sneakers', price: 35000, img: './../../images/sneakers.jpeg' },
  //   { id: 3, title: 'Hat for men', price: 8000, img: './../../images/hat.jpg' },
  //   { id: 4, title: 'Trainers', price: 12500, img: './../../images/pair-trainers.jpg' }

  // ]


  return (
    <div>
      <div className='hero'>
        <div className="hero-text">
          <h1>80% Discount on this products</h1>
          <p>And I'm a Photographer</p>
          <form className='w-50 m-auto d-flex'>
          <input type='text' className='form-control p-2' />
          {/* <button onDoubleClick={()=>alert('hello')} className='btn btn-dark ' ><FaSearch /></button> */}
          <button onClick={() => calculate()} className='btn btn-dark ' ><FaSearch /></button>
        </form>
        </div>

      </div>

      <div className='products container '>
        <div className='row mt-5 mb-5 g-1'>
          {products.map(item => (
            <div key={item.id} className='col-md-4'>
              <Productcard data={item} />
            </div>
          ))}

        </div>
      </div>
    </div>


  )
}

export default Home