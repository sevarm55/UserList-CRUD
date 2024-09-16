import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Inputs, IUsers } from "../lib/types"
import { addUser } from "../lib/api"

export const AddUser = () => {

    const {register,handleSubmit,reset,formState:{errors}} = useForm<Inputs>()
    const [users, setUsers] = useState<Inputs[]>([]);
    const navigate = useNavigate()


    const addNewUser = (newUser:IUsers) => {
        setUsers([...users,newUser])
    }
    
    const onSubmit:SubmitHandler<Inputs> = data => {
        addUser(data)
        .then(res => {
            addNewUser(res)
            reset(res)
            navigate('/')
        })
    }


    return <div className="addUser">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input
                className={`input ${errors.name ? "error" : ""}`}
                type="text"
                placeholder="name"
                {...register('name',{required:'Name is required'})}
            />
            <p className="errorText">{errors.name && errors.name.message}</p>
            <input
                className={`input ${errors.surname ? "error" : ""}`}
                type="text"
                placeholder="surname"
                {...register('surname',{required:'Surname is required'})}
            />
            <p className="errorText">{errors.surname && errors.surname.message}</p>
            <input
                className={`input ${errors.age ? "error" : ""}`}
                type="text"
                placeholder="age"
                {...register('age',{required:'Age is required'})}
            />
            <p className="errorText">{errors.age && errors.age.message}</p>
            <input
                className={`input ${errors.salary ? "error" : ""}`}
                type="text"
                placeholder="salary"
                {...register('salary',{required:'Salary is required'})}
            />
            <p className="errorText">{errors.salary && errors.salary.message}</p>
            <button>add</button>
        </form>
    </div>
}