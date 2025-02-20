import React, { useState } from 'react'
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

const Wazeer = () => {

 


  return (
    <React.Fragment>
        <div className="WEZO">
        <div className="row">
        <div className="col-md-3 SideNav">
            <SideNav/>

</div>
<div className="col-md-8 mainpart">
   <Outlet/>
    
</div>
        </div>

        </div>


    </React.Fragment>
    
  );
};

export default Wazeer;
