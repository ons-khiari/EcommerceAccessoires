import http from './axiosContext'




const logout = () => {
    return http.delete("/users/logout")
}

 const login = (data) => {
    return http.post("/api/login",data)
 }

 const register = (data) => {
    return http.post("/api/register",data)
    
} 


const getall = () => {
    return http.get('/api/clients')
}

const update = ( id , data) =>{
    return http.put(`/api/users/${id}`, data)
}
const deleteUserclient = (id,data) =>{
    return http.delete(`/api/users/${id}`,data)
}



export default {getall,logout,update,register,deleteUserclient}
