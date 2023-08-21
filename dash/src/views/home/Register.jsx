import { useState } from 'react';
/* import adminService from '../../services/adminService';
import clientService from '../../services/clientService'; */
import authService from '../../services/authService';
import axiosContext from '../../services/axiosContext';


function Register() {

  const [data,setData] = useState();
  
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
    authService.register(data)

    .then((res)=>{
      console.log(res)
      console.log("data register");

    })
    .catch((err)=>{
      console.log(err)
    })
  };
 
  
 

    return(
        <>
          <div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="../../images/logo-dark.svg" alt="logo" />
            </div>
            <h4>New here?</h4>
            <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            <form className="pt-3"  onSubmit={ onSubmitHandler}>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg"  name='Nom' id="exampleInputUsername"onChange={onChangeHandler}  placeholder="Nom" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg"  name='Prenom' id="exampleInputUsername1"onChange={onChangeHandler}  placeholder="Prenom" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg"  name="Email" id="exampleInputEmail" onChange={onChangeHandler}  placeholder="Email" />
              </div>
             
              <div className="form-group">
                <input type="password" className="form-control form-control-lg"  name="MDP" id="exampleInputPassword" onChange={onChangeHandler}  placeholder="Password" />
              </div>

              <div className="form-group">
                <input type="number" className="form-control form-control-lg" name="CIN" id="exampleInputcin" onChange={onChangeHandler}  placeholder="CIN" />
              </div>
              <div className="form-group">
                <input type="number" className="form-control form-control-lg"   name="NumTel" id="exampleInputphone" onChange={onChangeHandler}  placeholder=" NumTel" />
              </div>
              <div className="form-group">
                <input type="number" className="form-control form-control-lg"   name="CodePostal" id="exampleInputpCodepostal" onChange={onChangeHandler}  placeholder="CodePostal" />
              </div>

              <div className="form-group">
                <input type="text" className="form-control form-control-lg"   name="Ville" id="exampleInputVille" onChange={onChangeHandler}  placeholder="Ville" />
              </div>

              <div className="form-group">
                <input type="text" className="form-control form-control-lg"   name="Pays" id="exampleInputPays" onChange={onChangeHandler}  placeholder="Pays" />
              </div>



              <div className="form-group">
                <input type="text" className="form-control form-control-lg"  name="Address" id="exampleInputAdresse" onChange={onChangeHandler}  placeholder="Address" />
              </div>

              <div className="form-group">
                <input type="Number" className="form-control form-control-lg"  name="Type" id="exampleInputtype" onChange={onChangeHandler}  placeholder="Type" />
              </div>
           
           
              <button type="submit" className="btn btn-primary mr-2">SIGN UP</button>

             {/*  <div className="mt-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={onSubmitHandler} ></a>
              </div> */}
              <div className="text-center mt-4 font-weight-light">
                Already have an account? <a href="login.html" className="text-primary">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

        </>
    );
}

export default Register;