import { useState, useEffect } from "react";
import productService from "../../../services/productService";
import { Link } from 'react-router-dom'


function ListProduct() {

  const [product, setproduct] = useState();

  const getALL = () => {
    productService.getall().then((res) => {
      console.log(res.data.data)
      setproduct(res.data.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getALL()
  }, []);
  const onDelete = (id) => {
    productService.deleteprod(id).then((res) => {
      getALL()
    })
  }
  return (
    <>
      <div className="row" style={{ width: "82%", marginLeft: "1rem" }}>
        <div className="col-md-12">
          <div className="card">
            <div className="table-responsive pt-3">
              <table className="table table-striped project-orders-table">
                <thead>
                  <tr>
                   
                    <th>Ref</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>Description</th>
                    <th>Quantité</th>
                    <th>Marque</th>
                    <th>Pourcentage</th>
                    <th>CreatedAt</th>
                    <th>Date-debut-Promo</th>
                    <th>Date-fin-Promo</th>
                    <th>Instock</th>
                     <th>Category</th> 
                    <th>photos</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {product?.map((item) => {
                    
                    return (
                      <>
                    
                      <tr   >
                     
                      {/* <td>{item._id}</td> */}
                       
                        <td>{item.ref}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>{item.quantite}</td>
                        <td>{item.Marque}</td>
                        <td>{item.pourcentage}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.dateDebutPromotion}</td>
                        <td>{item.dateFinPromotion}</td>
                        <td>{item.inStock}</td>
                        <td>{item.category}</td>
                        <td>{item.gallerie?.map((photo) => {
                            return (
                              <>
                                {photo && (
                                  <img src={"http://localhost:8060/getImage/" + photo.name} style={{width: "100%",
                                  height: "100%"}} alt="" />
                                )
                                }</>
                            )
                          })}
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {/* //1ere etape fel update nektbou faza mtaa el link down below */}
                            <Link to={`/updateProd/${item._id}`}>
                              <button
                                type="button"
                                className="btn btn-success btn-sm btn-icon-text mr-3"
                              >
                                Edit
                                <i className="typcn typcn-edit btn-icon-append" />
                              </button>
                            </Link>
                            <button
                              onClick={(e) => onDelete(item._id)} //nhotou (e) bch yfasakh bel demande mte3na
                              type="button"
                              className="btn btn-danger btn-sm btn-icon-text"
                            >
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      </> )
                  })}











                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}
export default ListProduct;