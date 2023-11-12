import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  function signupform(f){
    f.preventDefault()

    let form = new FormData(f.currentTarget)
    alert(form.get("fullname"))


  }

  return (
    <div className=''>
      <section class="vh-50 bg-image bg__img">
  <div class="mask d-flex align-items-center h-50 gradient-custom-3">
    <div class="container h-50">
      <div class="row d-flex justify-content-center align-items-center h-50">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card mt-3 mb-3 card__bg" style={{borderRadius: "15px"}}>
            <div class="card-body p-4 ">
              <h2 class="text-uppercase text-center mb-3">Create an account</h2>

              <form onSubmit={(f) => signupform(f)}>

                <div class="form-outline mb-1">
                  <input type="text" name="fullname" class="form-control form-control-lg w-70" />
                  <label class="form-label" for="">Your Name</label>
                </div>

                <div class="form-outline mb-1">
                  <input type="email" name="email" class="form-control form-control-lg" />
                  <label class="form-label" for="">Your Email</label>
                </div>

                <div class="form-outline mb-1">
                  <input type="password" name="password" class="form-control form-control-lg" />
                  <label class="form-label" for="">Password</label>
                </div>

                <div class="form-outline mb-1">
                  <input type="password" name="rpassword" class="form-control form-control-lg" />
                  <label class="form-label" for="">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-3">
                  <input class="form-check-input me-2" type="checkbox" value="" name="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn signup__btn btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-1 mb-0">Have already an account? <Link to={"/Login"}
                    class="fw-bold text-body"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup