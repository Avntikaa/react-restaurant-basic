import { useState,useEffect } from 'react';
import './App.css';
import Input from './component/Input';
import ShowMenu from './component/ShowMenu';

function App() {
const [table1,setTable1]=useState([]);
        const [table2,setTable2]=useState([]);
    const [table3,setTable3]=useState([]);
    const [obj,setObj]=useState('');
    const [work,setWork]=useState([]);

    const SetTableNumberData=(tablenumber,item)=>{
 if(tablenumber==='table1'){
  setTable1((prev)=>[...prev,item]);
  console.log('working');
 }
          if(tablenumber==='table2'){
setTable2((prev)=>[...prev,item]);
  console.log('working');

          }
          if(tablenumber==='table3')
          {setTable3((prev)=>[...prev,item]);
              console.log('working');
          }
    }





useEffect(()=>{
  for(let i=0;i<localStorage.length;i++){
    console.log('woking');
      var es=localStorage.key(i);
     var parseval= localStorage.getItem(es);
     console.log(parseval);
     if(parseval)
     {
     const itemlist=JSON.parse(parseval);
      const tno=JSON.parse(parseval).tableno;
       SetTableNumberData(tno,itemlist);
      // setWork((prev)=>[...prev,itemlist]);
      }
    }

},[])


useEffect(()=>{
  if(obj!==''){
    var newobj = JSON.stringify(obj);//tonconvert object into string as localstorage contain string
          localStorage.setItem(obj.id,newobj);
  }
},[obj])


    const SetTable=(item)=>{
      console.log('set called');
      setObj(item);
const tablenumber=item.tableno;
         SetTableNumberData(tablenumber,item);
    }

    function isitemdeleted(id,tableno){
      if(tableno==='table1'){
        const newtable=table1.filter((i)=>{return i.id!==id; } )     
setTable1(newtable);
      }
      if(tableno==='table2'){
        const newtable=table2.filter((i)=>{return i.id!==id; } )     
setTable2(newtable);
      }
      if(tableno==='table3'){
        const newtable=table3.filter((i)=>{return i.id!==id; } )     
setTable3(newtable);
      }
    }
  

  return (
    <div className="App">
          Learn React
          <Input SetTable={SetTable} />
          <h1>Table1</h1>
          <div>
            <ShowMenu table={table1} yes={isitemdeleted}/>
          </div>
          <h1>Table2</h1>
          <div>
            <ShowMenu table={table2} yes={isitemdeleted}/>
          </div>
          <h1>Table3</h1>
          <div>
            <ShowMenu table={table3} yes={isitemdeleted}/>
          </div>
          <h2>{console.log(table2)}</h2>
    </div>
  );
}

export default App;
