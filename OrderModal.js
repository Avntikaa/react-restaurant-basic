import React from 'react'
import ReactDOM  from 'react-dom';
import './OrderModal.css'

const Modaloverlay=(props)=>{
  function closemodal(){
    props.closebox();
  }
return (
  <div className='out-div'> 
        <h3>sushi</h3>
        <span className='totalprice'>
                <h2>Total Amount</h2>
        <h4>35.62</h4>
        </span>
<button className='closebtn' onClick={closemodal}>close</button>
<button>order</button>
    </div>
)
}
const OrderModal = (props) => {
     return (
    <>
      {ReactDOM.createPortal(<Modaloverlay closebox={props.opencloseModal}/>,document.getElementById('overlay-root'))} 
      
    </>
      
  )
  
}

export default OrderModal