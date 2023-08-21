import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clientService from "../../../services/clientService";
import OrdersService from "../../../services/OrdersService";

function UpdateClient() {
  const { id } = useParams();
  const [data , setData] = useState();
  const navigate = useNavigate()
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
formdata.append("Nom",data.Nom);
/* console.log("data submit ");
console.log(data.Nom);
console.log(e.Nom);
console.log(data); */
formdata.append("Prenom",data.Prenom);
formdata.append("Email",data.Email);
formdata.append("MDP",data.MDP);
formdata.append("CIN",data.CIN);
formdata.append("NumTel",data.NumTel);
formdata.append("CodePostal",data.CodePostal);
formdata.append("Ville",data.Ville);
formdata.append("Pays",data.Pays);
formdata.append("Address",data.Address);
formdata.append("Type",data.Type) ;
/* formdata.append("Orders",data.Orders) */
console.log(data)
clientService.update(id,data)

.then((res)=>{
  console.log(res)
  navigate("/listCli")

})
    .catch((err)=>{
      console.log(err)
    })
  };
 /*  const [Orders, setOrders] = useState();
  const getAlll = () => {
    OrdersService.getall().then((res)=>{
      console.log(res.data.data)
      
      setOrders(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
      console.log("data register err");
    })
  } */
 /*  useEffect(()=>{
    getAlll()
  },[]); */
    return(
      <>
<div className="col-12 grid-margin stretch-card">
  <div className="card"  style={{width: '86%',minWidth: '76%'}}>
    <div className="card-body">
      <h4 className="card-title">Update Client</h4>
      <p className="card-description">
        Update Client
      </p>
      <form className="forms-sample"  onSubmit={onSubmitHandler}>

         {/*Nom*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Nom</label>
          <input type="text" name="Nom" onChange={onChangeHandler}  multiple className="form-control" id="exampleInputName11" placeholder="Nom" />
        </div>
        
        {/*Prenom*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Prenom</label>
          <input type="text" name="Prenom"  multiple className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="Prenom" />
        </div>

         {/*Email*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Email</label>
          <input type="email" name="Email" onChange={onChangeHandler}  multiple className="form-control" id="exampleInputName2" placeholder="Email" />
        </div>

         {/*MDP*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">MDP</label>
          <input type="password" name="MDP" onChange={onChangeHandler} multiple className="form-control" id="exampleInputName3" placeholder="MDP" />
        </div>
        
        {/*CIN*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">CIN</label>
          <input type="Number" name="CIN"  multiple className="form-control" onChange={onChangeHandler} id="exampleInputName4" placeholder="CIN" />
        </div>

         {/*NumTel*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">NumTel</label>
          <input type="Number" name="NumTel" onChange={onChangeHandler} multiple className="form-control" id="exampleInputName15" placeholder="NumTel" />
        </div>
        
        {/*CodePostal*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">CodePostal</label>
          <input type="Number" name="CodePostal"  multiple className="form-control" onChange={onChangeHandler} id="exampleInputName6" placeholder="CodePostal" />
        </div>

        {/*Ville*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Ville</label>
          <input type="text" name="Ville" onChange={onChangeHandler}  multiple className="form-control" id="exampleInputName7" placeholder="Ville" />
        </div>
        
        {/*Pays*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Pays</label>
          <input type="text" name="Pays" multiple className="form-control" onChange={onChangeHandler} id="exampleInputName8" placeholder="Pays" />
        </div>

         {/*Address*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Address</label>
          <input type="text" name="Address" onChange={onChangeHandler}  multiple className="form-control" id="exampleInputName9" placeholder="Address" />
        </div>
          {/*Type*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Type</label>
          <input type="Number" name="Type" onChange={onChangeHandler}  multiple className="form-control" id="exampleInputName10" placeholder="Type" />
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

export default UpdateClient;