import React from 'react'
import Meal from './Meal'
import './ShowMeal.css'
import OrderModal from './OrderModal'

const ShowMeals = () => {
    const meals=[{
        dish:'sushi',desc:'Finiest fish and veggies',price:22.99
    },{
 dish:'biryani',desc:'chicken and mutton',price:50.99
    }
    ,{
     dish:'veg fry',desc:'veggies',price:15
    }
]
  return (
    <>
    <div className='meallist'>
        {
            meals.map((meal)=>{
            return <Meal meal={meal}/>
            }
            )
        }
    </div>
          <OrderModal/>
          </>

  )
}

export default ShowMeals