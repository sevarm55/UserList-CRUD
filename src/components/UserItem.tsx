import {  IUsers } from "../lib/types"
import { Link } from "react-router-dom"

interface IPops {
  user: IUsers
  index: number
  onDelete: (id:string) => void
}

export const UserItem:React.FC<IPops> = ({user,index,onDelete}) => {
    
    return <div className="userItem">
        <div className="userItem-left">
            <p>{index + 1} .</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Surname:</strong> {user.surname}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Salary:</strong> {user.salary} AMD</p>
        </div>
        <div className="userItem-right">
            <Link to={'/users/' + user.id}>Edit</Link>
            <button onClick={() => onDelete(user.id)}>delete</button>
        </div>
    </div>
}