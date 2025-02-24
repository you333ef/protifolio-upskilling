import React, { useState } from 'react'
import REF from './work.module.css'
import soraONEE from '../../assets/project-assets/img-2-D-4H1m4L.jpg'
import soraTWO from '../../assets/project-assets/img-1-C4nS0eD8.jpg'
import soraThree from '../../assets/project-assets/img-3-pR2ZEVY9.jpg'
import sorafour from '../../assets/project-assets/img-4-tHccITd-.jpg'
import sorafive from '../../assets/project-assets/img-5-lAucr__a.jpg'
import sorasix from '../../assets/project-assets/img-6-DFW03AZ3.jpg'
const Work = () => {
  let[None,SetNone]=useState(true)
  function ChangeStatus(){
    SetNone(!None)
    console.log(None)
  }
  return (
    <>
    <div className={REF.woork}>
       <div className={REF.promising_title}>
            <h4>MY WORK</h4>
            <h2>RECENT WORK
            </h2>
          </div>
          <ul className={REF.UL}>
            <li><a href="">Graphic</a></li>
            <li><a href="">Programming</a></li>
            <li><a href="">Editing</a></li>
          </ul>
          <div className={REF.images}>
          <div className={`row ${REF.RWOW}`}>
            <div className={`col-lg-6 col-6 ${REF.TQSEMA}`}>
                  <img src={soraONEE} alt="" className={REF.image} />
            </div>
            <div className={`col-lg-6 col-6 ${REF.TQSEMA}`}>
            <img src={soraTWO} alt="" className={REF.image} />
            </div>
            <div className={`col-lg-6 col-6 ${REF.TQSEMA}`}>
            <img src={soraThree} alt="" className={REF.image} />

            </div>
            <div className={`col-lg-6 col-6 ${REF.TQSEMA}`}>
            <img src={sorafour} alt="" className={REF.image} />

            
            </div>
             <button onClick={ChangeStatus} className={`${None?REF.SEEbtn:REF.conc1} btn mt-2 btn-dark p-2`}>SEE More</button>
           
            <div className={`col-lg-6 col-6 ${REF.TQSEMA} ${None?REF.conc1:REF.WENGZ}`}>
            <img src={sorafive} alt="" className={REF.image} />

            </div>
            <div className={`col-lg-6 col-6 ${REF.TQSEMA} ${None?REF.conc2:REF.WENGZ}`}>
            <img src={sorasix} alt="" className={REF.image} />

            

            </div>


          </div>
          </div>





    </div>

    
   
    </>
  )
}

export default Work