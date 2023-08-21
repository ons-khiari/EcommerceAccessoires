import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoryService from "../../../services/categoryService";

import productService from "../../../services/productService";


function UpdateProduct() {
  const {id} = useParams()
  const [data, setData] = useState({})
  const [image, setImage] = useState({});
  const navigate = useNavigate()
  const onChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files);
    console.log('Selected images:', e.target.files);
  };
  
  const handleChanges = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const onSubmit = async(e) => {
    
    const formdata = new FormData();
      e.preventDefault();
      
      formdata.append("ref", data.ref);
      
      formdata.append("name", data.name);
      formdata.append("price", data.price);
      formdata.append("description", data.description);
      formdata.append("quantite", data.quantite);
      formdata.append("Marque", data.Marque);
      formdata.append("category", data.category);
      formdata.append("pourcentage", data.pourcentage);
      formdata.append("createdAt", data.createdAt);
      formdata.append("dateDebutPromotion", data.dateDebutPromotion);
      formdata.append("dateFinPromotion", data.dateFinPromotion);
      formdata.append("inStock", data.inStock);
      for (let i = 0; i < image.length; i++) {
        formdata.append("photos", image[i]);
      }
      try {
        const res = await productService.update(id, formdata);
        navigate("/listProd", { replace: true }); ;
        console.log(res);
       
    
        if (image.length > 0) {
          const imagesFormData = new FormData();
          for (let i = 0; i < image.length; i++) {
            imagesFormData.append("photos", image[i]);
          }
    
          await productService.updateImages(id, imagesFormData);
        }
    
        /* navigate("/listProd", { replace: true });  */
      } catch (err) {
        console.log(err);
      }
    };
  
  useEffect(() => {
    productService.getbyid(id).then((res)=>{
      console.log("productService.getbyid",res)
      setData(res.data.data) 
    })
  },[])
  
  const [categories, setCategories] = useState({});
  const getALL = () => {
    categoryService
      .getAll()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getALL();
  }, []);
  


  return (
    <>
      <div className="col-12 grid-margin stretch-card">
        <div className="card" style={{ width: '86%', minWidth: '76%' }}>
          <div className="card-body">
            <h4 className="card-title">Update Product</h4>
            <p className="card-description">
              Update Product
            </p>

            <form className="forms-sample" onSubmit={onSubmit}>
            

              {/*Name*/}
              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input type="text" name="name" className="form-control" value={data.name} id="exampleInputName1" onChange={handleChanges} placeholder="name" />
              </div>
                 {/*Price*/}
                 <div className="form-group">
                <label htmlFor="exampleInputName1">Price</label>
                <input type="Number" onChange={handleChanges} name="price" value={data.price} className="form-control" id="exampleInputName1" placeholder="price" />
              </div>
                 {/*description*/}
                 <div className="form-group">
                <label htmlFor="exampleInputName1">Description</label>
                <input type="text" onChange={handleChanges} name="description" value={data.description} className="form-control" id="exampleInputName1" placeholder="write here your description" />
              </div>
                {/*Quantité*/}
              <div className="form-group">
                <label htmlFor="exampleTextarea1">Quantité</label>
                <input type="Number" name="quantite" value={data.quantite} className="form-control" onChange={handleChanges} id="exampleInputName1" placeholder="Quantity" />
              </div>
                 {/*marque*/}
                 <div className="form-group">
                <label htmlFor="exampleInputName1">Marque</label>
                <input type="text" onChange={handleChanges} name="Marque" value={data.Marque} className="form-control" id="exampleInputName1" placeholder="Marque" />
              </div>

              {/*category*/}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">category</label>

                
        
        <select name="category" onChange={handleChanges}>
    {Array.isArray(categories) &&
      categories.map((x) => (
        <option key={x._id} value={x.name} >
          {x.name}
        </option>
      ))}
  </select>
       
      </div> 
      
               {/*createdAt*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Created At</label>
                <input type="Date" name="createdAt" className="form-control" value={data.createdAt} id="exampleInputName1" onChange={handleChanges} placeholder="Date" />
              </div>
               {/*Date Debut de Promo*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Date Debut de Promo</label>
                <input type="Date" name="dateDebutPromotion" className="form-control" value={data.dateDebutPromotion} id="exampleInputName1" onChange={handleChanges} placeholder="dateDebutPromotion" />
              </div>
               {/*Date Fin de Promo*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Date Fin de Promo</label>
                <input type="Date" name="dateFinPromotion" className="form-control" value={data.dateFinPromotion} id="exampleInputName1" onChange={handleChanges} placeholder="dateFinPromotion" />
              </div>
              {/*in Stock*/}
              <div className="form-group">
                <label htmlFor="exampleInputName1">In Stock</label>
                <input type="boolean" name="inStock" className="form-control" value={data.inStock} id="exampleInputName1" onChange={handleChanges} placeholder="inStock" />
              </div>
        


              {/*Upload File*/}
              <div className="form-group">
                <label>File upload</label>
                <div className="input-group col-xs-12">
                 
                  <input type="file" name="gallerie" className="form-control file-upload-info" onChange={onChangeImage}  placeholder="Upload Image" />
                  <span className="input-group-append">


                    
                  </span>

                </div>
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

export default UpdateProduct;