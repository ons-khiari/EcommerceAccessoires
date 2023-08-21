import { useState } from "react";
import TopBar from "../../component/topbar";
import SideBar from "../../component/sidebar";
import {Outlet} from "react-router-dom"; //dans {} car reactrouterdom yjib f plusieurs objets en meme temps

function Home() {
  
  
   
   
   
   
   
   
   return (
        <>
           <div className="container-scroller" >
  
            <TopBar></TopBar>

            <div  className="container-fluid page-body-wrapper">
              <SideBar></SideBar>
             {/* partial */}
              <Outlet/>
              {/* main-panel ends */}
            </div>
            {/* page-body-wrapper ends */}
           </div>
           
        </>
     );
}

export default Home;