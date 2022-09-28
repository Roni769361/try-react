import React, { useEffect, useState } from "react";
import Comment from "../comment/comment";

const Home =(props)=>{
    return(
        <div style={{border:'3px solid green'}}>
            <People></People>
            <Comment></Comment>
        </div>
    )
}

function People(props){
   
    const [user, setUser] = useState([]);
    const Api = `https://jsonplaceholder.typicode.com/users`
    useEffect(()=>{
        fetch(Api)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return(
        <div>
             <h2>This is Home Part: {user.length}</h2>
           {
                user.map(pxa => <div style={{border:'2px solid green', margin:'10px', lineHeight:'50%', borderRadius:'15px'}}>
                    <h1>{pxa.name}</h1>
                    <h3>{pxa.email}</h3>
                    <h4>{pxa.address.street}</h4>
                    <button>set up</button>
                    </div>)
           }
        </div>
    )
}

export default Home;