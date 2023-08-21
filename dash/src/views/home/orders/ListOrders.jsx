import { useState, useEffect } from "react";
import OrdersService from "../../../services/OrdersService";
import { Link } from 'react-router-dom'


function ListOrders() {

  const [order, setOrder] = useState();

  const getALL = () => {
    OrdersService.getall().then((res) => {
      console.log(res.data)
      setOrder(res.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getALL()
  }, []);
  const onDelete = (id) => {
    OrdersService.deletecommande(id).then((res) => {
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
                    
                    
                    <th>order Date</th>
                    <th>Client</th>
                    <th>product</th>
                    <th>panier</th>
                    <th>totalPrice</th>
                    <th>paymentMethod</th>
                    <th>deliveryAddress</th>
                    <th>quantity</th>

                  <th>Actions</th> 
                  </tr>
                </thead>
                <tbody>

                  {order?.map((item, index) => {
                    return (
                      <tr key={index}>
                        
                       
                        <td>{item.orderDate}</td>
                        <td>{item.client}</td>
                        <td>{item.product}</td>
                        <td>{item.panier}</td>
                        <td>{item.totalPrice}</td>
                        <td>{item.paymentMethod}</td>
                        <td>{item.deliveryAddress}</td>
                        <td>{item.quantity}</td>
                        

                       
                        <td>
                          <div className="d-flex align-items-center">
                            {/* //1ere etape fel update nektbou faza mtaa el link down below */}
                            <Link to={`/updateOrd/${item._id}`}>
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
export default ListOrders;