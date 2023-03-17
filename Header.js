import React,{useState} from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './Header.css'
import meals from './mealheader.jpg'
import OrderModal from '../Meals/OrderModal'

const Header = (props) => {
  console.log(props.count);
  const [openModal,setOpenModal]=useState(false);
const opencloseModal=()=>{
    setOpenModal((prev)=>!prev);
  }
  
  return (
    <>
    <div>
   <div className='cartdiv'>
        <h1 className='heading'>ReactMeals</h1>
        <div className='middle'></div>
        <button className='cartbtn' onClick={opencloseModal}>
          <span id='icon'><FaCartArrowDown size={20}/></span>
<span>Your Cart</span>
   <span id='badge'>{props.count}</span>
          </button>
    </div>
    <div className='header-image'>
        <img src={meals} alt='A table full of delicious food!' />
      </div>
   </div>
      {
        openModal && 
        <OrderModal opencloseModal={opencloseModal}/>
      }
      </>
  )
}

export default Header