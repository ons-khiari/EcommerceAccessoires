import { useState , useEffect } from "react";
import categoryService from "../../../services/categoryService";
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

function ListCategory() {

  const [categories,setcategories] = useState();

  const getALL = () =>{
    categoryService.getAll().then((res)=>{
      console.log(res.data.data)
      setcategories(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getALL()
  },[]);
  

  const onDelete = (idd) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        categoryService.deleteCat(idd).then((res)=>{
          getALL()
         })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
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
                    <th className="ml-5">ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((item,index) => {
                    return(
                      <tr key={index}>
      <td>{index}</td>
      <td>{item.name}</td>
      {/* <td> */}
 {/*  {Array.isArray(item.product) ? item.product.map((productItem, productIndex) => (
    <span key={productIndex}>{productItem.name}{productIndex !== item.product.length - 1 ? ', ' : ''}</span>
  )) : null}
</td>

    
    */}
                         
                        <td>
                          <div className="d-flex align-items-center">
                            {/* //1ere etape fel update nektbou faza mtaa el link down below */}
                          <Link to={`/updateCat/${item._id}`}>
                           <button
                             type="button"
                             className="btn btn-success btn-sm btn-icon-text mr-3"
                           >
                             Edit
                             <i className="typcn typcn-edit btn-icon-append" />
                           </button>
                           </Link>
                           <button 
                             onClick={(e)=>onDelete(item._id)} //nhotou (e) bch yfasakh bel demande mte3na
                             type="button"
                             className="btn btn-danger btn-sm btn-icon-text"
                            >
                              Delete
                             <i className="typcn typcn-delete-outline btn-icon-append" />
                           </button>
                          </div>
                        </td>
                      </tr>
                    )
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

export default ListCategory;
