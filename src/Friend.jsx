import './Friends.css'

export default function Friend({friend}){
    const {id, name, email}= friend;
    return(
        <div className="box">
            <h4>Id: {id}</h4>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}