import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './Meal.css'

const Meal = (props) => {
  return (
    <div className='eachmeal'>
      <span> 
         <h3>{props.meal.dish}</h3>
        <h5>{props.meal.desc}</h5>
        <h4>${props.meal.price}</h4>
        </span>
        <span className='addinttocart'>
          <div className='amount'>
            <h4>Amount</h4>
            <h4 className='quantity'>1</h4>
          </div>
          <button className='addbtn'>
             <span id='icon'><FaPlus/></span>
          <span>Add</span>
          </button>
        </span>
      

    </div>
  )
}

export default Meal