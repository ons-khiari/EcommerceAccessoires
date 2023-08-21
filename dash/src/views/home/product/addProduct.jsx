import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../../../services/productService";
import axios from 'axios'; 
import categoryService from "../../../services/categoryService";


function AddProduct() {
  const [data, setData] = useState({});
  const [image, setImage] = useState({});
  const [categories, setCategories] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const sendDataToServer = async () => {
    try {
      const response = await axios.post('http://localhost:8060/product/add', data);
      // Traiter la réponse réussie ici
      console.log(response.data);
    } catch (error) {
      // Gérer l'erreur ici
      console.error('Erreur lors de la requête:', error.message);
      // Vous pouvez également afficher un message d'erreur à l'utilisateur
    } 
  }; 

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const onChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files);
    console.log("test upload image");
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    const formdata = new FormData();
  /*   e.preventDefault();
    sendDataToServer(); */
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
    try{

     productService.create(formdata);
    console.log(data);
    navigate("/listProd", { replace: true }); ;


    }catch(err) {
        console.log(err);
      };
  };


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
  
 

    return(
        <>
<div className="col-12 grid-margin stretch-card">
  <div className="card"  style={{width: '86%',minWidth: '76%'}}>
    <div className="card-body">
      <h4 className="card-title">Add Product</h4>
      <p className="card-description">
        Add Product
      </p>
      <form className="forms-sample"  onSubmit={onSubmitHandler}>


              {/*Ref*/}
              <div className="form-group">
                <label htmlFor="exampleInputName1">Ref</label>
                <input type="text" onChange={onChangeHandler} name="ref" value={data.ref} className="form-control" id="exampleInputName1" placeholder="REF" required />
              </div>

              {/*Name*/}
              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input type="text" name="name" className="form-control" value={data.name} id="exampleInputName1" onChange={onChangeHandler} placeholder="name" required />
              </div>
                 {/*Price*/}
                 <div className="form-group">
                <label htmlFor="exampleInputName1">Price</label>
                <input type="Number" onChange={onChangeHandler} name="price" value={data.price} className="form-control" id="exampleInputName1" placeholder="price" required />
              </div>
                 {/*description*/}
                 <div className="form-group">
                <label htmlFor="exampleInputName1">Description</label>
                <input type="text" onChange={onChangeHandler} name="description" value={data.description} className="form-control" id="exampleInputName1" placeholder="write here your description" required />
              </div>
                {/*Quantité*/}
              <div className="form-group">
                <label htmlFor="exampleTextarea1">Quantité</label>
                <input type="Number" name="quantite" value={data.quantite} className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="Quantity" required />
              </div>
                 {/*marque*/}
                 <div className="form-group">
                <label htmlFor="exampleInputName1">Marque</label>
                {/* <input type="text" onChange={onChangeHandler} name="Marque" value={data.Marque} className="form-control" id="exampleInputName1" placeholder="Marque" /> */}
                <select type="text" onChange={onChangeHandler} name="Marque" value={data.Marque} className="form-control" id="exampleInputName1" placeholder="Marque" >
                  <option>OR</option>
                  <option>Argent</option>
                  <option>Diament</option>
                  <option>Acier inoxidable</option>
                </select>
              </div>

          
        
          
               {/*pourcentage*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Pourcentage</label>
                <input type="text" onChange={onChangeHandler} name="pourcentage" value={data.pourcentage} className="form-control" id="exampleInputName1" placeholder="pourcentage" required/>
              </div>

               {/*createdAt*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Created At</label>
                <input type="Date" name="createdAt" className="form-control" value={data.createdAt} id="exampleInputName1" onChange={onChangeHandler} placeholder="Date" required />
              </div>
               {/*Date Debut de Promo*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Date Debut de Promo</label>
                <input type="Date" name="dateDebutPromotion" className="form-control" value={data.dateDebutPromotion} id="exampleInputName1" onChange={onChangeHandler} placeholder="dateDebutPromotion" required />
              </div>
               {/*Date Fin de Promo*/}
               <div className="form-group">
                <label htmlFor="exampleInputName1">Date Fin de Promo</label>
                <input type="Date" name="dateFinPromotion" className="form-control" value={data.dateFinPromotion} id="exampleInputName1" onChange={onChangeHandler} placeholder="dateFinPromotion" required  />
              </div>
              {/*in Stock*/}
              <div className="form-group">
                <label htmlFor="exampleInputName1">In Stock</label>
                {/* <input type="text" name="inStock" className="form-control" value={data.inStock} id="exampleInputName1" onChange={onChangeHandler} placeholder="inStock" /> */}
                <select type="text" name="inStock" className="form-control" value={data.inStock} id="exampleInputName1" onChange={onChangeHandler} placeholder="inStock" required>
                  <option>Oui</option>
                  <option>Non</option>

                 </select>
              </div>
              
             {/* Category */}
      <div className="form-group">
        <label htmlFor="exampleInputName1">Category</label>
        <select name="category" onChange={onChangeHandler} required>
    {Array.isArray(categories) &&
      categories.map((x) => (
        <option key={x._id} value={x.name} >
          {x.name}
        </option>
      ))}
  </select>
       
      </div> 
      
      
           

                


              {/*Upload File*/}
              <div className="form-group">
                <label>File upload</label>
                <div className="input-group col-xs-12">
                 
                  <input type="file" name="gallerie" className="form-control file-upload-info" onChange={onChangeImage}  placeholder="Upload Image" required />
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
export default AddProduct;