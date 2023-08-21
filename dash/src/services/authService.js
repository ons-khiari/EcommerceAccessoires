import http from './axiosContext'

const login = (data) => {
    return http.post("api/login",data)
}
const register = (data) => {
    return http.post("/api/register",data)
} 
const logout = () => {
    return http.delete("/users/logout")
}

export default {login,register, logout}