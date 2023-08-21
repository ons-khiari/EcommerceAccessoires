import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrdersService from "../../../services/OrdersService";
import clientService from "../../../services/clientService";
import productService from "../../../services/productService";
import panierService from "../../../services/panierService";
import axiosContext from "../../../services/axiosContext";


function AddOrders() {

 

  const [data,setData] = useState({    orderDate: '',
  client: '',
  product: '',
  panier: '',
  totalPrice: '',
  paymentMethod: '',
  deliveryAddress: '',
  quantity: '',
});
  const { id } = useParams();
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
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

    OrdersService.create(data)

    .then((res)=>{
      console.log(res)
      navigate("/listOrd")

    })
    .catch((err)=>{
      console.log(err)
    })
  };
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
      setClient(res.data)
      
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
      <h4 className="card-title">Add Orders</h4>
      <p className="card-description">
        Add Orders
      </p>
      <form className="forms-sample"  onSubmit={onSubmitHandler}>

        {/*orderDate*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Order Date</label>
          <input
            type="Date"
            name="orderDate"
            value={data.orderDate}
            onChange={onChangeHandler}
            className="form-control"
            id="exampleInputName"
            placeholder="orderDate"
          required />
        </div>
        
        {/*client*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Client</label>
          <br/>
           {/* <input   onChange={onChangeHandler}   />  */}
          <select type="Number"  name="client" className="form-control" id="exampleInputName1" value={data.client} onChange={onChangeHandler} placeholder="client" required>
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
          <label htmlFor="exampleInputName1">Product</label>
          <br/>
           {/* <input type="text" name="product" value={data.product}   onChange={onChangeHandler}  className="form-control" id="exampleInputName2" placeholder="product" />  */}
          <select type="text" name="product" value={data.product}  onChange={onChangeHandler} className="form-control" id="exampleInputName2" placeholder="product" required  >
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
          <label htmlFor="exampleInputName1">Panier</label>
           {/* <input type="string" name="panier" value={data.panier}  onChange={onChangeHandler} className="form-control" id="exampleInputName3" placeholder="panier" /> */}
          <select type="text" name="panier" value={data.panier}  onChange={onChangeHandler} className="form-control" id="exampleInputName3" placeholder="panier" required   >
                <option>64db589bc58757454f4c3655</option>
                 </select> 
        </div>

         {/*totalPrice*/}
         <div className="form-group">
          <label htmlFor="exampleInputName2">total Price</label>
          <br/>
          <input type="Number" name="totalPrice" value={data.totalPrice} onChange={onChangeHandler} multiple className="form-control1" id="exampleInputName4" placeholder="totalPrice" required />
        </div>
        
        
        {/*paymentMethod*/}
       
        
               <div className="form-group">
          <label htmlFor="exampleInputName1">payment Method</label>
          <br/>
          <input type="text" name="paymentMethod" value={data.paymentMethod} className="form-control3" onChange={onChangeHandler} id="exampleInputName5" placeholder="paymentMethod" required/>
        </div> 
             
           
       
        {/*deliveryAddress*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">delivery Address</label>
          <input type="text" name="deliveryAddress" value={data.deliveryAddress}  onChange={onChangeHandler} multiple className="form-control" id="exampleInputName6" placeholder="deliveryAddress" required/>
        </div>
        {/*quantity*/}
        <div className="form-group">
  <label htmlFor="exampleInputName3">quantity</label>
  <br/>
  <input type="number" name="quantity" value={data.quantity} onChange={onChangeHandler} className="form-control2" id="exampleInputName7" placeholder="quantity" required />
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
export default AddOrders;