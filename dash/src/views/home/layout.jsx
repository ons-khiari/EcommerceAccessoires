import React from "react";
import productService from "../../services/productService"
import OrdersService from "../../services/OrdersService"
import { useState,useEffect } from "react";

import "./Charte.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

  

function Layout() {
 
  const [product, setproduct] = useState([]);

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



  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
      try {
          const response = await OrdersService.getall();
          setOrders(response.data); // Store the data in the 'orders' state
      } catch (error) {
          console.error("Error fetching orders:", error);
      }
  };

  useEffect(() => {
      fetchOrders();
  }, []);
  
  console.log(orders)
  /*
  import data array mta products
  import dataArraymta orders from haja (file ili fyh data base)
  const balance=0
  for(let i=0;i<dataArray.length;i++){
    balance=balance+dataArray[i].price

  }  
  
  prod=dataaraaymta product.length
  ord=dataaraaymta orders.length
  
  */
 const po=product.length
  
 
 const balance = orders.reduce((total, order) => total + order.totalPrice, 0);

const ord=orders.length

  
  
  /*chart part  */
  const data = [
    { name: "Products", items:po },
    { name: "Orders", items: ord },
    
    { name: "Balance", items: balance },
  ];

  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          
          <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                    <div>
                      <p className="tes mb-2 text-md-center text-lg-left">Total Products</p>
                      <h1 className="mb-0">{po}</h1>
                    </div>
                    <i className="typcn typcn-briefcase icon-xl text-secondary" />
                  </div>
                  <canvas  height={80} />
                </div>
              </div>
            </div>
            
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                    <div>
                      <p className="tes mb-2 text-md-center text-lg-left">Total Orders</p>
                      <h1 className="mb-0">{ord}</h1>
                    </div>
                    <i className="typcn typcn-chart-pie icon-xl text-secondary" />
                  </div>
                  <canvas  height={80} />
                </div>
              </div>
            </div>
            
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                    <div>
                      <p className="tes mb-2 text-md-center text-lg-left">Total Balance</p>
                      <h1 className="mb-0">{balance}</h1>
                    </div>
                    <i className="typcn typcn-clipboard icon-xl text-secondary" />
                  </div>
                  <canvas  height={80} />
                </div>
              </div>
            
            </div>
          </div>



          <div className="row ">
           
            <div  className="col-xl-6 grid-margin stretch-card flex-column ">
              <h5 className="tes mb-2 text-titlecase mb-4">Income statistics</h5>
              <div className="row h-100">
                
                <div className="col-md-12 stretch-card">
                  
                  <div className="card">
                    
                    <div className="card-body">
                      
                      <div className="d-flex justify-content-between align-items-start flex-wrap">

                       
                        
                      </div>
                      
                      
                      <div style={{ textAlign: "center" }}>
      {/*chart part */}
      <div className="App">
        <PieChart  width={400} height={400}>
          <Pie
            dataKey="items"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart className="pie"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="items" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
                    {/*bedel facebook oukol ib prod */}
                    </div>
                  
                  </div>
                </div>
              
              </div>
            

            </div>
          </div>
         

        </div>
        {/* content-wrapper ends */}
        {/* partial:partials/_footer.html */}
        <footer className="footer ll">
          <div className="card">
            <div className="card-body">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2020 . All rights reserved.</span>
               
              </div>
            </div>
          </div>
        </footer>
        {/* partial */}
      </div>
    </>
  )
}
export default Layout;