
import http from './axiosContext'

  
  
  
  
  
  

const create = (data) => {
    return http.post('/order/create', data)
}

const getall = () => {
    return http.get('/order/getAll')
}

const update = (id , data) =>{
    return http.put(`/order/${id}` , data)
}

const deletecommande = (id) => {
    return http.delete(`/order/${id}`)
}

const getbyid = (id) => {
    return http.get(`/order/${id}`)
}

export default {create , update , getbyid , deletecommande, getall}