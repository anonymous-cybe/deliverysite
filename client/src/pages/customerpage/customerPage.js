import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/Navbar'
import '../customerpage/customerPage.css'
import How from './how'

export default function CustomerPage() {
  return (    
    <div className='customer-container'>      
      <Navbar/>

    <div id=' input-container'>
      <div className='text-center mb-5'>
      <h3>Everything you need, delivered now!</h3>
      </div>      
      <div className="input-group" >  
      <span id='map-pin'><i className="fa-solid fa-map-pin"></i></span>  
      <span><p id='deliver-text' className='mx-1' >Delivering to</p></span>
      </div>   
      <div className='address-container mb-3 '>
       <input type='text' id='address' placeholder='Enter your Address' className='form-control'/>        
      </div>   
    </div>
    <How/>
    <Footer/>

    </div>
   
  )
}
