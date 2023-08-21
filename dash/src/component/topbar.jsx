/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
function TopBar() {
    
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' });
  return (
        <>
        {/* partial:partials/_navbar.html */}
         
          <nav  className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row  ">
    <div style={{backgroundColor: "#00c8bf"}} className="navbar-brand-wrapper d-flex justify-content-center ">
      <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
        <h3 className="last-call">Beauty dashboard</h3>
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="typcn typcn-th-menu" />
        </button>
      </div>
    </div>
    <div style={{backgroundColor: "#00c8bf"}} className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <ul className="navbar-nav mr-lg-2">
        <li className="nav-item nav-profile dropdown">
          
          <div  className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <a className="dropdown-item">
              <i className="typcn typcn-cog-outline text-primary" />
              Settings
            </a>
            <a className="dropdown-item">
              <i className="typcn typcn-eject text-primary" />
              Logout
            </a>
          </div>
        </li>
       
      </ul>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item nav-date dropdown">
          <a className="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
            <h6 className="date mb-0">{`Aujourd'hui : ${formattedDate}`}</h6>
            <i className="typcn typcn-calendar" />
          </a>
        </li>
        
        <li className="nav-item dropdown">
         
         
          <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
            <i className="typcn typcn-cog-outline mx-0" />
            <span className="count" />
          </a>
          
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list " aria-labelledby="messageDropdown">
            <p className="mb-0 font-weight-normal float-left dropdown-header">Menu</p>
            
            
            
            <a className="dropdown-item preview-item set-hold">
              <div className="preview-thumbnail">
              <i className="icon-for-product typcn typcn-power set-icon" />
              </div>
              <div className="preview-item-content flex-grow">
              <a href="http://localhost:3000/"><h6 className="set-tit preview-subject ellipsis font-weight-normal"> LOG OUT
                </h6></a>
                
              </div>
            </a>
          </div>
        
        </li>

       
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="typcn typcn-th-menu" />
      </button>
    </div>
</nav>
 
    {/* partial */}
     


        </>
    );
}

export default TopBar;