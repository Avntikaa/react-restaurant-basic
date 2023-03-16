import React from 'react'
import AddTable from './AddTable'
const ShowMenu = (props) => {
  return (
    <>
    <div>
        {
            props.table.length>0 && props.table.map((i)=>{
return <AddTable key={Math.random()} item={i} yes={props.yes}/>
            })
        }
    </div>
   </>
  )
}

export default ShowMenu