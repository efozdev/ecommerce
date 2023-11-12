import React from 'react'
// import {
//   FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare,
//   FaUserAlt, FaKey
// } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  function loginSubmit(e){
    e.preventDefault()
    
    let form = new FormData(e.currentTarget)

    alert(form.get("email"))
    alert(form.get("password"))

  }



  return (
    <div className="lbody vh-100 ">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="login">
            <div className="card-header">
              {/* login header */}
              <div class="login-triangle"></div>
              <h2 class="login-header">Log in</h2>
            </div>
            {/* login container */}

            <div className="login-container">
              <form class="" onSubmit={(e) => loginSubmit(e)}>
                <p><input type="email" name="email" placeholder="Email" /></p>
                <p><input type="password" name="password" placeholder="Password" /></p>
                <p><input type="submit" value="Log in" /></p>
              </form>
              <div className="card-footer">
                <div class="d-flex justify-content-center links">
                  Don't have an account?<Link to={"/Signup"}>Sign Up</Link>
                </div>
                <div class="d-flex justify-content-center">
                  <Link to={"#"}>Forgot your password?</Link>
                </div>

              </div>


            </div>



          </div>
        </div>
      </div>

    </div>


  )
}

export default Login