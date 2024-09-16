import axios from "axios";
import { Inputs } from "./types";

export const getUsers = async (id?:string) => {
    const getId = id ? "http://localhost:3004/users/" + id : "http://localhost:3004/users"
    const response = await axios.get(getId)
    return response.data
}

export const addUser = async (data:Inputs) => {
    const response = await axios.post('http://localhost:3004/users',data)
    return response.data
}

export const updateUser = async (id:string,data:Inputs) => {
    const response = await axios.put("http://localhost:3004/users/" + id,data)
    return response.data
}

export const deleteUser = async (id:string) => {
    const response = await axios.delete("http://localhost:3004/users/" + id)
    return response.data
}