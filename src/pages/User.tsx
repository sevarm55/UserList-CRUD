import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import { getUsers, updateUser } from "../lib/api"
import { Inputs } from "../lib/types"

export const User = () => {

    const [users,setUsers] = useState<Inputs | undefined>(undefined)
    const {handleSubmit,register,reset,formState:{errors}} = useForm<Inputs>()
    const navigate = useNavigate()
    
    const {id} = useParams()

    useEffect(() => {
        getUsers(id)
        .then(res => {
            setUsers(res)
            reset(res)
        })
    },[id])
    

    const onSubmit:SubmitHandler<Inputs> = (data) => {
        if(id) {
            updateUser(id,data)
            .then(res => {
                navigate('/')
            })
        }
    }
    
    
    return <>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input
                className={`input ${errors.name ? "error" : ""}`}
                type="text"
                placeholder="name"
                {...register("name",{required:'Name is required'})}
                defaultValue={users?.name}
            />
            <p className="errorText">{errors.name && errors.name.message}</p>
            <input
                className={`input ${errors.surname ? "error" : ""}`}
                type="text"
                placeholder="surname"
                {...register("surname",{required:'Surname is required'})}
                defaultValue={users?.surname}
            />
            <p className="errorText">{errors.surname && errors.surname.message}</p>
            <input
                className={`input ${errors.age ? "error" : ""}`}
                type="text"
                placeholder="age"
                {...register("age",{required:'age is required'})}
                defaultValue={users?.age}
            />
            <p className="errorText">{errors.age && errors.age.message}</p>
            <input
                className={`input ${errors.salary ? "error" : ""}`}
                type="text"
                placeholder="salary"
                {...register("salary",{required:'Salary is required'})}
                defaultValue={users?.salary}
            />
            <p className="errorText">{errors.salary && errors.salary.message}</p>
            <button>add</button>
        </form>
    </>
}