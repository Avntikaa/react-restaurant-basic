import React from 'react'
import './Meal.css'

const Meal = (props) => {
  return (
    <div className='eachmeal'>
        <h3>{props.meal.dish}</h3>
        <h5>{props.meal.desc}</h5>
        <h4>${props.meal.price}</h4>
    </div>
  )
}

export default Meal