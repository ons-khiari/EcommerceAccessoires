import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import productService from "../../../services/productService";
import OrdersService from "../../../services/OrdersService";
import panierService from "../../../services/panierService";
import clientService from "../../../services/clientService";


function UpdateOrders() {
  const [data, setData] = useState({
    orderDate: "",
    client: "",
    product: "",
    panier: "",
    totalPrice: "",
    paymentMethod: "",
    deliveryAddress: "",
    quantity: "",
  });
  
  const navigate = useNavigate()
  const { id } = useParams();
  const onChangeHandler =  (e) => {
    setData({
      ...data, 
      [e.target.name] : e.target.value
    });
    console.log(data);
  };

  const onSubmitHandler = (e) =>{
    const formdata=new FormData()
    e.preventDefault()
 formdata.append("orderDate",data.orderDate)
formdata.append("client",data.client)
formdata.append("product",data.product)
formdata.append("panier",data.panier)
formdata.append("totalPrice",data.totalPrice)
formdata.append("paymentMethod",data.paymentMethod)
formdata.append("deliveryAddress",data.deliveryAddress)
formdata.append("quantity",data.quantity)
 
    OrdersService.update(id,data)

    .then((res)=>{
      console.log(res)
      navigate("/listOrd")

    })
    .catch((err)=>{
      console.log(err)
    })
  };

  useEffect(() => {
    OrdersService.getbyid(id).then((res)=>{
      console.log("OrdersService.getbyid",res)
      setData(res.data.data) 
    })
  },[])
  const [product, setProducts] = useState();
  const getAlll = () => {
    productService.getall().then((res)=>{
      console.log(res.data.data)
      setProducts(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAlll()
  },[]);

  const [client, setClient] = useState();
  const getAll = () => {
    clientService.getall().then((res)=>{
      console.log(res.data.data)
      setClient(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAll()
  },[]);
  const [panier, setPanier] = useState();
  const getall = () => {
    panierService.getall().then((res)=>{
      console.log(res.data.data)
      setPanier(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getall()
  },[]);
 
    return(
        <>
<div className="col-12 grid-margin stretch-card">
  <div className="card"  style={{width: '86%',minWidth: '76%'}}>
    <div className="card-body">
      <h4 className="card-title">Update Orders</h4>
      <p className="card-description">
        Update Orders
      </p>
      <form className="forms-sample"  onSubmit={onSubmitHandler}>

        {/*orderDate*/}
        <div className="form-group">
          <label htmlFor="exampleInputName">Order Date</label>
          <input type="Date" name="orderDate"  onChange={onChangeHandler} className="form-control" id="exampleInputName" placeholder="orderDate" />
          
        </div>
        
        {/*client*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Client</label>
          <select  type="Number" name="client" className="form-control"  onChange={onChangeHandler} id="exampleInputName1" placeholder="client" >
                 {client?.map((i) => {
                 return (
                <option value={i.NumTel} key={i.NumTel}>
                  {i.NumTel}
                    </option>
                       );
                      })}
                 </select>
        </div>

         {/*product*/}
         <div className="form-group">
          <label htmlFor="exampleInputName2">Product</label>
          <select type="text" name="product"   onChange={onChangeHandler}  className="form-control" id="exampleInputName2" placeholder="product"  >
                 {product?.map((i) => {
                 return (
                <option value={i.ref} key={i.ref}>
                  {i.ref}
                    </option>
                       );
                      })}
                 </select>
          
          
        </div>
          {/*panier*/}
         <div className="form-group">
          <label htmlFor="exampleInputName3">Panier</label> 
          <select  type="text" name="panier"  onChange={onChangeHandler} className="form-control" id="exampleInputName3" placeholder="panier" >
               <option>64db589bc58757454f4c3655</option>
                 </select>
        </div>

         {/*totalPrice*/}
         <div className="form-group">
          <label htmlFor="exampleInputName4">total Price</label>
          <input type="Number" name="totalPrice"  onChange={onChangeHandler} multiple className="form-control" id="exampleInputName4" placeholder="totalPrice"  />
        </div>
        
        {/*paymentMethod*/}
        
          <div className="form-group row">
               <label htmlFor="exampleInputName6">payment Method</label>
               <input type="text" name="paymentMethod"   className="form-control" onChange={onChangeHandler} id="exampleInputName5" placeholder="paymentMethod" />      
        </div>
        {/*deliveryAddress*/}
        <div className="form-group">
          <label htmlFor="exampleInputName5">delivery Address</label>
          <input type="text" name="deliveryAddress"  onChange={onChangeHandler} multiple className="form-control" id="exampleInputName6" placeholder="deliveryAddress"  />
        </div>
        {/*quantity*/}
        <div className="form-group">
          <label htmlFor="exampleInputName6">quantity</label>
          <input type="Number" name="quantity"  onChange={onChangeHandler} multiple className="form-control" id="exampleInputName7" placeholder="quantity" />
        </div>

      

       

        
       


        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>
        </>
    )
}

export default UpdateOrders;