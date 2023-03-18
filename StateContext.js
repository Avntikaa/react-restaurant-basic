import React, { useContext, useState, createContext} from "react";
const Context = createContext();
export const StateContext = ({ children }) => {
 const[count,setCount]=useState(0);

  const addtocart=()=>{
    setCount(()=>count+1);
  }

  // eslint-disable-next-line no-unused-vars
  
  return (
    <Context.Provider
      value={{
      count,setCount,addtocart
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);