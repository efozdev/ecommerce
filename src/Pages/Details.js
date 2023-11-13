import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {BsStarFill, BsStarHalf, BsFillHeartFill} from 'react-icons/bs'
import { FaOpencart } from 'react-icons/fa'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useState } from 'react';
import axios from 'axios'

function Details() {

  const { id } = useParams()

  const [pinfo, setPinfo] = useState(null)

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => setPinfo(res.data))
    .catch((err) => console.log(err))
  }, []);





  const [qty, setQty] = useState(1);
  const decrease = () => {
    if (qty === 0) return;
    setQty(qty - 1);
  };
  const increase = () => {
    setQty(qty + 1);
  };


  // const [qplus, setPlus] = useState(0)

  // function Plus() {
  //   setPlus(qplus + 1)
  // }

  // const [qminus, setMinus] = useState(0)

  // function Minus() {
  //   setMinus(qminus - 1)
  // }

   return (
   <div className='productdetails'>
         {/* content start */}
<section className="py-5">
  <div className="container">
    <div className="row">
    <aside className="col-lg-6 col-md-4">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <Link data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" to={pinfo?.images[0]} alt="sneakers">
            <img style={{maxWidth: "100%", maxHeight: "100vh", margin: "auto"}} className="rounded-4 fit" src={pinfo?.images[0]} alt="sneakers"/>
          </Link>
        </div>
        <div className="d-flex justify-content-center mb-3">
          {
            pinfo?.images.map((item) =>(
              <Link data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" to={pinfo?.images[0]} alt="big1">
            <img width="60" height="60" className="rounded-2" src={item} alt="big1" />
          </Link>
            ))
          }
          
        </div>
         {/* thumbs-wrap.//  */}
        {/* gallery-wrap .end//  */}
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">
          {pinfo?.title}
          </h4>
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
              <BsStarFill color="#E4A11B" size={25}/>
              <BsStarFill color="#E4A11B" size={25}/>
              <BsStarFill color="#E4A11B" size={25}/>
              <BsStarFill color="#E4A11B" size={25}/>
              <BsStarHalf color="#E4A11B" size={25}/>
              <span className="ms-1 text-warning ">
                4.3
              </span>
            </div>
            <span className="text-muted mb-1 me-2">< FaOpencart size={15}/>14 orders</span>
            <span className="text-success ms-2">In stock</span>
          </div>

          <div className="mb-3">
            <span className="h5">{pinfo?.price}</span>
            <span className="text-muted me-2" >/per box</span>
          </div>

          <p>
          {pinfo?.description}
          </p>

          <div className="row">
            <dt className="col-3">Type:</dt>
            <dd className="col-9">Regular</dd>

            <dt className="col-3">Color</dt>
            <dd className="col-9">White</dd>

            <dt className="col-3">Material</dt>
            <dd className="col-9">Leather</dd>

            <dt className="col-3">Brand</dt>
            <dd className="col-9">Nike</dd>
          </div>

          <hr />

          <div className="row mb-4">
            <div className="col-md-4 col-6">
              <label className="mb-2">Size</label>
              <select className="form-select border border-secondary" style={{height: "35px;"}}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
             {/* col.//  */}
            <div className="col-md-4 col-6 mb-3">
              <label className="mb-2 d-block">Quantity</label>
              <div className="input-group mb-3" style={{width: "170px;"}}>
                <button onClick={decrease}  className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <BiMinus/>
                </button>
                <input type="text" className="form-control text-center border border-secondary" placeholder={qty} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button onClick={increase} className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                <BiPlus/>
                </button>
              </div>
            </div>
          </div>
          <Link to={"#"} className="btn btn-warning shadow-0 me-1 py-2"> Buy now </Link>
          <Link to={"#"} className="btn btn-light border border-secondary py-2 icon-hover px-3"> <BsFillHeartFill className="me-1"/> Save </Link>
        </div>
      </main>

    </div>  
    </div>
    </section>  

    </div>
  )
}

export default Details