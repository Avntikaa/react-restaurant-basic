import React,{useState} from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './Header.css'
import meals from './mealheader.jpg'
import OrderModal from '../Meals/OrderModal'
import { useStateContext} from "../store/StateContext";

const Header = (props) => {
      const cxt=useStateContext();
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
   <span id='badge'>{cxt.count}</span>
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