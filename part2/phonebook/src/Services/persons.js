import axios from "axios";
const url = "/api/persons";

const getAll = ()=>{
    const request = axios.get(url)
    return request.then(response=>response.data)
}

const addPerson =(newObject)=>{
 const request = axios.post(url,newObject)
 return request.then(response=>response.data)  
}

const updatePerson = (id,newObject)=>{
    const request = axios.put(`${url}/${id}`,newObject)
    return request.then(()=>newObject)
}

const deletePerson = (id)=>{
    const request = axios.delete(`${url}/${id}`)
    return request
}

export default {
    getAll,
    addPerson,
    updatePerson,
    deletePerson
}
