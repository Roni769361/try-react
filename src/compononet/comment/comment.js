import React, { useState } from "react";

const Comment=(props)=>{
    const [Data, SetData] = useState(0);
    // const evenHendlar = () => console.log("Hello")
    return(
       <div>
         <h1>Comment box : {Data}</h1>
         <button onClick={()=> SetData(Data +1)}>Hello</button>
       </div> 
        
    )
}

export default Comment;