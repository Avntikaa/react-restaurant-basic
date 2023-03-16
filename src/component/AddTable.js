import React from 'react'

const AddTable = (props) => {
  const id=props.item.id;
  const no=props.item.tableno;
  const deleteitem=(id)=>{
    console.log(id);
      localStorage.removeItem(id);
      props.yes(id,no);
  }
  return (
    <>

    <div>{props.item.id}</div>
        <div>{props.item.price}</div>
    <div>{props.item.dish}</div>
        <div>{props.item.tableno}</div>
<button onClick={()=>deleteitem(id,no)}>delete</button>
</>
  )
}

export default AddTable