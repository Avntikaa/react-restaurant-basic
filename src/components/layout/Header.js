import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './Header.css'
const Header = () => {
  return (
    <div className='cartdiv'>
        <h1 className='heading'>ReactMeals</h1>
        <div className='middle'></div>
        <button className='cartbtn' id="cartbutton"><FaCartArrowDown size={20}/>Your Cart <span>0</span></button>
    </div>
  )
}

export default Header