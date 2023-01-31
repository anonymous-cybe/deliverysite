import React from 'react'
import './footer.css'
import footerLogo from '../components/img/logo2.png'

export default function Footer() {
  return (  
    <div>
       <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
            <div className="row my-5 justify-content-center py-5">
                <div className="col-11">
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-12   my-auto mx-auto a"><img src={footerLogo} alt='' id='footerlogo'/>
                        <h3 className='footer-text-title'>
              The Best Delivery System You Would Find
            </h3>
          
          <p className='footer-text-desc'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12"><h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6><ul className="list-unstyled"><li><a href="#" className="text-reset footer-link">Become A Rider!</a></li><li><a href="#" className="text-reset footer-link">FAQ</a></li><li><a href="#" className="text-reset footer-link ">About Us</a></li></ul></div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12"><h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6><p className="mb-1"> Sylvason Supermarket ,Ogwashi-uku</p> </div>
                    </div>
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end"><p className="social text-muted mb-0 pb-0 bold-text"> <span  className="mx-2"><i class="fa-brands fa-facebook"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fas fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> Sylvason Delivery All Rights Reserved.</small></div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end "><h6 className="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> anirudh@gmail.com</small></div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   "><h6 className="text-muted bold-text"><b>CONTACT US</b></h6><small><span><i className="fa fa-phone" aria-hidden="true"></i></span> + 234 905 440 4158</small></div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </div>    
  )
}
