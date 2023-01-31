import React from 'react'
import './signup.css'
import logo from '../img/logo2.png'

export default function Signup() {
  return (
    <div className="signup_form_wrapper">
		<div id='img'>
		<img src={logo} alt=''/>
		</div>
			<div class="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						{/* login_wrapper */}
						<div className="sign-wrapper">
                            {/* <div>dfg</div>                            */}
                            <div id='form'>
							<div className="row">								
								<div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
									<a href="#" className="btn  google-plus"> SignUp  with Google <i class="fa-brands fa-square-google-plus"></i> </a>
								</div>
							</div>
							<h2>or</h2>
							<div className="formsix-pos">
								<div className="form-group i-email">
									<input type="text" className="form-control" required id="fullname" placeholder="Full Name *"/>
								</div>
							</div>
							<div className="formsix-pos">
								<div className="form-group i-email">
									<input type="email" className="form-control" required id="email2" placeholder="Email Address *"/>
								</div>
							</div>
							<div className="formsix-pos">
								<div className="form-group i-email">
									<input type="tel" className="form-control" required id="email2" placeholder="Phone Number *"/>
								</div>
							</div>
							<div className="formsix-e">
								<div className="form-group i-password">
									<input type="password" className="form-control" required id="password2" placeholder="Password *"/>
								</div>
							</div>
							<div className="formsix-e">
								<div className="form-group i-password">
									<input type="password" className="form-control" required id="password2" placeholder="Confirm Password *"/>
								</div>
							</div>
							{/* <div className="login_remember_box">
								<label className="control control--checkbox">Remember me
									<input type="checkbox"/>
									<span className="control__indicator"></span>
								</label>
								<a href="#" className="forget_password">
									Forgot Password
								</a>
							</div> */}
							<div class="login_btn_wrapper">
								<a href="#" className="btn login_btn">Sign up </a>
							</div>
							<div className="login_message">
								<p>Already have an account ? <a href="/login"> Sign In </a> </p>
							</div>
                            </div>
						</div>
						 {/* /.login_wrapper */}
					</div>
				</div>
			</div>
		</div>
  )
}
