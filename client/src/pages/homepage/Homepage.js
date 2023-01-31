import React from 'react';
import {useNavigate} from "react-router-dom";


import './homepage.css'
import '../img/rider2.png'
import logo from '../img/logo2.png';
import customerImg from "../img/customer2.png";
import riderImg from "../img/rider5.png";




export default function Homepage() {
  const cards = [
    {
      img: customerImg,
      path: "/customer",
      name: "Customer"
    },
    {
      img: riderImg,
      path: "/rider",
      name: "Rider"
    },
  ]
  return (
    <div>
      <div id='container'>
        <div id='logo-img'>
        <img src={logo} alt=''/>
        </div>
        <div id='main'>
          {
            cards.map(({img, path, name}, i) => (
              <UserCard img={img} path={path} name={name} key={i} />
            ))
          }
        </div>
        <div></div>
              
      </div>
    </div>
  )
}




const UserCard = ({img, path, name}) => {
  const navigate = useNavigate();
  function gotoPage(e){
    navigate(`${path}`, {
      replace: false
    })
  }
  return (
    <div className='user_card' onClick={gotoPage}>
      <img src={img} alt="User's card" />
      <h2>{name}</h2>
    </div>
  )
}