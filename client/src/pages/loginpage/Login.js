import React from 'react'
import './login.css'
import logo from '../img/logo2.png'

export default function Login() {
  return (
    <div className="login_form_wrapper">
		<div id='img'>
		<img src={logo}/>
		</div>
			<div class="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						{/* login_wrapper */}
						<div className="login_wrapper">
							<div className="row">								
								<div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
									<a href="#" className="btn  google-plus"> Login  with Google <i class="fa-brands fa-square-google-plus"></i> </a>
								</div>
							</div>
							<h2>or</h2>
							<div className="formsix-pos">
								<div className="form-group i-email">
									<input type="email" className="form-control" required id="email2" placeholder="Email Address *"/>
								</div>
							</div>
							<div className="formsix-e">
								<div className="form-group i-password">
									<input type="password" className="form-control" required="" id="password2" placeholder="Password *"/>
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
								<a href="#" className="btn login_btn">Sign In </a>
							</div>
							<div className="login_message">
								<p>Don&rsquo;t have an account ? <a href="/signup"> Sign up </a> </p>
							</div>
						</div>
						 {/* /.login_wrapper */}
					</div>
				</div>
			</div>
		</div>
  )
}
