import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      {/* partial:partials/_sidebar.html */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="box-side">
        <ul className="nav hh">
          <li className="nav-item">
            <Link className="nav-link" to="/" data-toggle="offcanvas">
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title dd">Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" data-toggle="offcanvas" >
              <i className="icon-for-category typcn typcn-th-large menu-icon" />
              <span className="menu-title">Category</span>
            </Link>
          </li>
          <ul className="az">
          <li className="nav-item">
            <Link className="nav-link" to="/addCat" data-toggle="offcanvas">
              
             
              
              <span className="menu-title">Add  Category</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listCat" data-toggle="offcanvas">
            
              <span className="menu-title">List Category</span>
            </Link>
          </li></ul>
          <li className="nav-item">
            
            <Link className="nav-link"data-toggle="offcanvas" >
            <i className=" icon-for-product typcn typcn-shopping-bag outline-large menu-icon" />
              <span className="menu-title">Product</span>
            </Link>
          </li>
          
          <ul className="az">
          <li className="nav-item" >
            <Link className="nav-link" to="/addProd"data-toggle="offcanvas">
              
              <span className="menu-title">Add product</span>
            </Link>
          </li>
          
          <li  className="nav-item">
            <Link className="nav-link" to="/listProd"data-toggle="offcanvas">
              
              <span  className="menu-title">List product</span>
            </Link>
          </li>
          </ul>
          <li className="nav-item">
            
            <Link className="nav-link"data-toggle="offcanvas" >
              <i className="cli icon-for-product typcn typcn-shopping-cart outline-large " />
              <span className="menu-title">Orders</span>
            </Link>
          </li>
          
          <ul className="az">
          <li className="nav-item" >
            <Link className="nav-link" to="/addOrd"data-toggle="offcanvas">
              
              <span className="menu-title">Add order</span>
            </Link>
          </li>
          
          <li  className="nav-item">
            <Link className="nav-link" to="/listOrd"data-toggle="offcanvas">
              
              <span  className="menu-title">List orders</span>
            </Link>
          </li>
          </ul>
          <li className="nav-item">
            
            <Link className="nav-link"data-toggle="offcanvas" >
            
              <i className="icon-for-product typcn typcn-group outline-large menu-icon" />
              <span className="menu-title">Clients</span>
            </Link>
          </li>
          
          <ul className="az">
          <li className="nav-item" >
            <Link className="nav-link" to="/addCli"data-toggle="offcanvas">
              
              <span className="menu-title">Add client</span>
            </Link>
          </li>
          
          <li  className="nav-item">
            <Link className="nav-link" to="/listCli"data-toggle="offcanvas">
              
              <span  className="menu-title">List clients</span>
            </Link>
          </li>
          </ul>

         
        </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        
      </nav>
    </>
  );
}

export default SideBar;
