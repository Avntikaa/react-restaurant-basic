import React, { useState} from 'react'
// import StateContext from '../store/StateContext'

const Input = (props) => {
//    const data=useContext(StateContext);
  const[id,setId]=useState('');
        const[price,setPrice]=useState('');
    const[dish,setDish]=useState('');
    const[tableno,setTableno]=useState('');

function onUniqueid(e){
    setId(e.target.value);
}

function onPricechange(e){
    setPrice(e.target.value);
}

function onDishchange(e){
    setDish(e.target.value);
}
function onTablechange(e){
    setTableno(e.target.value);
}
function submitdetails(e){
    e.preventDefault();
const obj={
    id:id,
    price:price,
    dish:dish,
    tableno:tableno
}
props.SetTable(obj);

}
  return (
    <form>
                <label htmlFor="id">Unique Id</label>
                        <input type="number" onChange={onUniqueid}/>
                    <label htmlFor="price">Price:</label>
                <input type="number" onChange={onPricechange}/>
        <label htmlFor="Dish">Product:</label>
        <input type="text" onChange={onDishchange}/>
        <label htmlFor="table">Choose Categpry:</label>
<select name="cars" id="cars" onChange={onTablechange}>
  <option value="table1">Electronics</option>
  <option value="table2">SkinCare</option>
  <option value="table3">Food Items</option>
</select>
<button onClick={submitdetails}>save</button>
    </form>
  )
}

export default Input