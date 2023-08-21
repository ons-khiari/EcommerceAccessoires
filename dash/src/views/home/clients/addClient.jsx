import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clientService from "../../../services/clientService";
import OrdersService from "../../../services/OrdersService";

function AddClient() {
  const { id } = useParams();
  const [data,setData] = useState();
  const navigate = useNavigate()
  const onChangeHandler =  (e) => {
    setData({
      ...data, 
      [e.target.name] : e.target.value
    });
    console.log("data");
    console.log(data);
  };
  

  const onSubmitHandler = (e) =>{
    const formdata=new FormData()
    e.preventDefault()
formdata.append("Nom",data.Nom)
console.log("data submit ");
console.log(data.Nom);
console.log(e.Nom);
console.log(data);
formdata.append("Prenom",data.Prenom)
formdata.append("Email",data.Email)
formdata.append("MDP",data.MDP)
formdata.append("CIN",data.CIN)
formdata.append("NumTel",data.NumTel)
formdata.append("CodePostal",data.CodePostal)
formdata.append("Ville",data.Ville)
formdata.append("Pays",data.Pays)
formdata.append("Address",data.Address)
formdata.append("Type",data.Type) 
/* formdata.append("Orders",data.Orders) */
console.log(data)
    clientService.register(data)

    .then((res)=>{
      console.log(res)
      console.log("data register");
      navigate("/listCli")

    })
    .catch((err)=>{
      console.log(err)
    })
  };
  const [Orders, setOrders] = useState();
  const getAlll = () => {
    OrdersService.getall().then((res)=>{
      console.log(res.data.data)
      
      setOrders(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
      console.log("data register err");
    })
  }
  useEffect(()=>{
    getAlll()
  },[]);
 
    return(
        <>
<div className="col-12 grid-margin stretch-card">
  <div className="card"  style={{width: '86%',minWidth: '76%'}}>
    <div className="card-body">
      <h4 className="card-title">Add Client</h4>
      <p className="card-description">
        Add Client
      </p>
      <form className="forms-sample"  onSubmit={onSubmitHandler}>

         {/*Nom*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Nom</label>
          <input type="text" name="Nom" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="Nom" required/>
        </div>
        
        {/*Prenom*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Prenom</label>
          <input type="text" name="Prenom" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="Prenom" required />
        </div>

         {/*Email*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Email</label>
          <input type="email" name="Email" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="Email" required />
        </div>

         {/*MDP*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">MDP</label>
          <input type="password" name="MDP" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="MDP" required />
        </div>
        
        {/*CIN*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">CIN</label>
          <input type="Number" name="CIN" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="CIN" required/>
        </div>

         {/*NumTel*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">NumTel</label>
          <input type="Number" name="NumTel" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="NumTel" required/>
        </div>
        
        {/*CodePostal*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">CodePostal</label>
          <input type="Number" name="CodePostal" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="CodePostal" required />
        </div>

        {/*Ville*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Ville</label>
          <input type="text" name="Ville" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="Ville" required />
        </div>
        
        {/*Pays*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Pays</label>
          <input type="text" name="Pays" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="Pays" required />
        </div>

         {/*Address*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Address</label>
          <input type="text" name="Address" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="Address" required/>
        </div>
          {/*Type*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Type</label>
          <input type="Number" name="Type" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="Type" required/>
        </div>

        
        {/*Orders*/}
       {/*  <div className="col-md-12">
          <div className="form-group row">
               <label className="col-sm-3 col-form-label">Orders</label>
               <div className="col-sm-9">
               {/* <input type="text" name="Orders" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="Orders" /> */}
              {/*  <select  type="text" name="Orders" className="form-control" onChange={onChangeHandler}  >
                  {Orders?.map((i)=> {
                    return(
                      <option value={i._id}>
                        {i.name}
                      </option>
                    )
                  })}
                 </select> 
                  
               </div>
           </div>
        </div> */} 

      

       

        
       


        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
export default AddClient;