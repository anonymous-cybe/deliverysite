import React from 'react'
import './AddProduct.css'

export default function AddProduct() {
  var divCounter=1
  const additem=()=> {
    var aCounter=divCounter+1;
    const pTag= document.getElementById('demo')
   pTag.innerHTML='WHY';
   const getcontainer= document.getElementById('add-product-container')
   const createContainer=document.createElement('div').innerHTML='<div class="span">hey</div>'
  //  const createContainer= document.createElement('div').innerHTML='<div id="input-container'+aCounter+'"><input type="text" className="form-control input-item"  placeholder="enter items.." aria-label="" aria-describedby="basic-addon1"/><div className="input-group-append"><button onClick={additem} className="btn btn-outline-secondary mx-1" type="button" style=backgroundColor:"#098068"><i className="fa-sharp fa-solid fa-plus" style=color:"#fff" ></i></button><button className="btn btn-outline-secondary " type="button" style=backgroundColor:"#918c8c"><i className="fa-solid fa-xmark" style="#fff"></i></button></div></div>';
   getcontainer.append(createContainer);
  } 
  
  return (
    <div className='add-product-parent-container'>
      <div id='add-product-container'>
       <div className="input-group mb-3" id='input-container'> 
        <input type="text" className="form-control input-item"  placeholder="enter items.." aria-label="" aria-describedby="basic-addon1"/>
        <div className="input-group-append">
         <button onClick={additem} className="btn btn-outline-secondary mx-1" type="button" style={{backgroundColor:'#098068'}}><i className="fa-sharp fa-solid fa-plus" style={{color:'#fff'}} ></i></button>
         <button className="btn btn-outline-secondary " type="button" style={{backgroundColor:'#918c8c'}}><i className="fa-solid fa-xmark" style={{color:'#fff'}}></i></button>
         </div>
      </div>
    </div>
    <p id='demo'>ff</p>
  </div>
  )
}
