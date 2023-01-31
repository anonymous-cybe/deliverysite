import React from 'react';
import "./how.css";
import deliveryguy from '../img/deliveryguy1.png';
import map from '../img/map1.1.png';
import store from '../img/store3.png';

export default function How() {
  return (
    <div className="container text-center">
  <div className="row justify-content-md-center">
    <h3 className='title'>How It Works</h3>
    <div className="col-sm-4">
    <div className="card" style={{width: '100%'}}>
  <img src={map} className="card-img-top" alt="..." style={{height:'12rem'}}/>
  <div className="card-body">
    <h4 className='card-title'>Set Delivery Location</h4>
    <p className="card-text">Select the location where you want us to deliver.</p>
  </div>
</div>
    </div>
    <div className="col-sm-4">
    <div className="card" style={{width: '100%'}}>
  <img src={store} className="card-img-top" alt="..." style={{height:'12rem'}} />
  <div className="card-body">
    <h4 className='card-title'>Enter Items</h4>
    <p className="card-text">Browse shops that deliver near you.</p>
  </div>
</div>
    </div>
    <div className="col-sm-4">
    <div className="card" style={{width: '100%'}}>
  <img src={deliveryguy} className="card-img-top" alt="..." style={{height:'12rem'}}/>
  <div className="card-body">
    <h4 className='card-title'>Recieve It At Your Doorstep</h4>
    <p className="card-text">Your order will be delivered to you in no time.</p>
  </div>
</div>
    </div>
  </div>
</div>
    

  )
}
