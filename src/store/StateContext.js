import React,{useState} from 'react'

const StateContext = React.createContext({
  id: '',
        price:'',
        dish:'',
        onUniqueid: ()=>{},
        onPricechange: ()=>{},
        onDishchange:()=>{}
});

export const AuthContextProvider = (props) => {
   const[id,setId]=useState('');
        const[price,setPrice]=useState('');
    const[dish,setDish]=useState('');

function Uniqueid(e){
    setId(e.target.value);
        console.log(e.target.value);

}

function Pricechange(e){
    setPrice(e.target.value);
}

function Dishchange(e){
    setDish(e.target.value);
}
  return (
    <StateContext.Provider
      value={{
        id: id,
        price:price,
        dish:dish,
        onUniqueid: Uniqueid,
        onPricechange: Pricechange,
        onDishchange:Dishchange
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};export default StateContext