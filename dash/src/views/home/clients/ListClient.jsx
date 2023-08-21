import { useState, useEffect } from "react";

import { Link } from 'react-router-dom'
import clientService from "../../../services/clientService";


function ListClient() {

  const [client, setclient] = useState();

  const getALL = () => {
    clientService.getall().then((res) => {
      console.log(res.data)
      setclient(res.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getALL()
  }, []);
  const onDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this client?");
  
    if (confirmDelete) {
      clientService.deleteUserclient(id)
        .then((res) => {
          console.log("Client deleted successfully");
          getALL();
        })
        .catch((error) => {
          console.error("Error deleting client:", error);
        });
    }
  };

  
  
  
  
  
  
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
                    
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>MDP</th>
                   {/*  <th>Orders</th> */}
                    <th>CIN</th>
                    <th>NumTel</th> 
                    <th>CodePostal</th>
                    <th>Ville</th>
                    <th>Pays</th> 
                    <th>Address</th>
                    <th>Type</th> 
                    <th>Actions</th> 

                  </tr>
                </thead>
                <tbody>

                  {client?.map((item, index) => {
                    return (
                      <tr>
                        <td>{index}</td>
                       
                        <td>{item.Nom}</td>
                        <td>{item.Prenom}</td>
                        <td>{item.Email}</td>
                        <td>{item.MDP}</td>
                        {/* <td>{item.Orders?.id}</td> */}
                        <td>{item.CIN}</td>
                        <td>{item.NumTel}</td>
                        <td>{item.CodePostal}</td>
                        <td>{item.Ville}</td>
                        <td>{item.Pays}</td>
                        <td>{item.Address}</td>
                        <td>{item.Type}</td>
                       
                        


                       
                        <td>
                          <div className="d-flex align-items-center">
                            {/* //1ere etape fel update nektbou faza mtaa el link down below */}
                            <Link to={`/updateCli/${item._id}`}>
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
                        >                  Delete
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
export default ListClient;