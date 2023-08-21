import { useEffect , useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoryService from "../../../services/categoryService";

function UpdateCategory() {

  const {id} = useParams()
  const [data, setData] = useState({})
  const navigate = useNavigate()
  
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    categoryService.update(id,data).then((res)=>{
      console.log(res)
      navigate("/listcat")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    categoryService.getbyid(id).then((res)=>{
      console.log("categoryService.getbyid",res)
      setData(res.data.data) //khater aana data f west data
    })
  },[])

    return(
       <>
            <div className="col-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Update Category</h4>
      <p className="card-description">
        Update Category
      </p>
      <form className="forms-sample" onSubmit={onSubmit}>

        {/*Name*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" name="name"  value={data.name} onChange={handleChange} />
        </div>
        
       

        {/* buttons submit et cancel */}
        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>

       </>
    );
}

export default UpdateCategory;