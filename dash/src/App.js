import './App.css';
import Home from './views/home/home';

import {BrowserRouter as Router,Routes , Route, Link, Navigate } from 'react-router-dom';
import Login from './views/home/login';
import Register from './views/home/Register'
import ListCategory from './views/home/category/ListCategory';
import AddCategory from './views/home/category/addCatregory';
import UpdateCategory from './views/home/category/updateCategory';
import Layout from './views/home/layout';

import AddProduct from './views/home/product/addProduct';
import ListProduct from './views/home/product/ListProduct';
import UpdateProduct from './views/home/product/updateProd';
import AddOrder  from "./views/home/orders/addOrders"
import ListOrder from "./views/home/orders/ListOrders"
import UpdateOrder from "./views/home/orders/updateOrders" 

import AddClient from "./views/home/clients/addClient"
import ListClient from "./views/home/clients/ListClient"
import UpdateClient from "./views/home/clients/updateClient"
/* import { Children } from 'react'; */

function App() {
  //pour vérifier eli enti connecter ou non
  //children les pages eli teb3in luser
  /*const PrivateRoute=({children})=>{
    if (!localStorage.getItem("user")){
      return <Navigate to ='/login'></Navigate>
    }
    return children ;}*/
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={  <Home/> }> 
        <Route exact path="/" element={<Layout/> }> </Route>
            <Route exact path="/listcat" element={ <ListCategory />}> </Route>
            <Route exact path="/addCat" element={<AddCategory /> }> </Route>
            <Route exact path='/updateCat/:id' element={<UpdateCategory/>}></Route>
          <Route exact path="/addProd" element={<AddProduct/>}></Route>
            <Route exact path="/listProd" element={<ListProduct/>}></Route>
            <Route exact path="/updateProd/:id" element={<UpdateProduct/>}></Route>
            
            <Route exact path="/addOrd" element={<AddOrder/>}></Route>
            <Route exact path="/listOrd" element={<ListOrder/>}></Route>
            <Route exact path="/updateOrd/:id" element={<UpdateOrder/>}></Route>
            
            <Route exact path="/addCli" element={<AddClient/>}></Route>
            <Route exact path="/listCli" element={<ListClient/>}></Route>
            <Route exact path="/updateCli/:id" element={<UpdateClient/>}></Route>
        </Route>
      
        <Route exact path="/register" element={<Register /> }> </Route>
        <Route exact path="/login" element={<Login /> }> </Route>
          </Routes>
    </Router>
  );
}

export default App;
