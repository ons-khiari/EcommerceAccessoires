import http from './axiosContext'


const create = (data) => {
    return http.post('/panier/add/',data)
} 

const getall = () => {
    return http.get('/panier/')
}

const update = (id,data) =>{
    return http.put(`/panier/update/${id}`,data)
}

const deletepanier = (id) => {
    return http.delete(`/panier/delete/${id}`)
}

const getbyid = (id) => {
    return http.get(`/panier/${id}`)
}

export default {create,getall,getbyid,update,deletepanier}
