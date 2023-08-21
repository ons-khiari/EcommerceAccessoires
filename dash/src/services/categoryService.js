// 1ere etape : importation de l'axios
import http from './axiosContext';

// 2eme étape : (les paths des fonctions) path de la fonction create 
const create = (data) => { //data is what we will take from the front to the back puis stocké dans la bd
    //utiliser post car create est une fonction POST
    return http.post("/categorie/add", data) //path parent de category fel back + path de la fonction dans le dossier Router
}

//path de la fonction getAll 
const getAll = () => {
    return http.get("/categorie/")
}

//path de la fonction update 
const update = (id , data) => {
    return http.put(`/categorie/${id}`, data) //puisque 3ana id et data --- alt gr + 7 pour ecrire le path --- (/${id}) pour le ID
}

//path de la fonction getById 
const getbyid = (id) => {
    return http.get(`/categorie/get/${id}`)
} 

//path de la fonction delete 
const deleteCat = (id) => {
    return http.delete(`/categorie/delete/${id}`)
}

// Derniere etape: exportation
export default {create , update , getAll , getbyid , deleteCat}