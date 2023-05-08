import React, { useState } from "react";
import Time from "./Time";
import Todo from "./Todo";

const App=()=>{
   const[inputlistold ,inputlistnew]=useState(" ");
   const [items,setitems]=useState([]);

   const inputevent=(event)=>{
      inputlistnew(event.target.value)

   };
   const whensubmit=()=>{
      setitems((inputlist) =>{
         return[...inputlist,inputlistold];

      });
      inputlistnew(" ");

   };
   const deleteditem=(id)=>{
      setitems((inputlist)=>{
         return inputlist.filter((arrElem,index)=>{
            return index !==id;
         });


      });

   };
    return(
        <>
        <div className="maindiv">
        <div className="centerdiv">
        <br/>
        <Time/>
            <h1 > to do list</h1>
         <input type="text" placeholder="add items"
         value={inputlistold}
          onChange={inputevent}/>
            <button onClick={whensubmit}>+</button> 
         <ol>
           {items.map((itemval,index)=>{
            return <Todo  key={index} id={index} text={itemval}
               onSelect={deleteditem}
            />;
           })}

         </ol>
            </div>
            </div>
            </>
    )
}

export default App;
