import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){
    const friendsStyle ={
        border:'2px solid purple',
        margin:'15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const [friends,setFriends] = useState([]);
    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])




    return(
        <div style={friendsStyle}>
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
*1. state to hole data.
*2. use effect with dependency array.
*3. use fetch to load data.
*4 set loaded data to state
*/ 