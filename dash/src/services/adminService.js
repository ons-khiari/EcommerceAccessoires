import http from './axiosContext'

const register = (data) => {
    return http.post('/api/register',data)
}

const update = (id,data) => {
    return http.put(`/admin/${id}` , data)
}

const getall = () => {
    return http.get("/admin/")
}

const deleteadmin = (id) => {
    return http.delete(`/admin/delete/${id}`)
}

const getbyid = (id) => {
    return http.get(`/admin/get/${id}`)
}

export default {register,getall,getbyid,update,deleteadmin}
