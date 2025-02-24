import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import ERP from './experiance.module.css'
import { FaPencilAlt } from 'react-icons/fa';
const Experiance = () => {
  return (
   <div className={ERP.EXPERIANCE_WE}>
    <div className={ERP.promising_title}>
      <h4>EXPERIENCE</h4>
      <h2>WORK EXPERIENCE
      </h2>
    </div>
    <div className={ERP.Corners}>
    <div className="row mt-5">
      <div className="col-12">
        <div className={ERP.timeline}>
          <div className={ERP.timelineItem}>
            <div className={`${ERP.timelineIcon} ${ERP.blue}`}>
              <FaPencilAlt />
            </div>
            <div className={ERP.timelineContent}>
              <h4>Full Stack Developer <span className={ERP.date}>2017-2018</span></h4>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now not.
                Add and offered prepare how cordial two promise.
              </p>
            </div>
          </div>

          <div className={ERP.timelineItem}>
            <div className={`${ERP.timelineIcon} ${ERP.red}`}>
              <FaPencilAlt />
            </div>
            <div className={ERP.timelineContent}>
              <h4>Front End Developer at Google Company <span className={ERP.date}>2017-2018</span></h4>
              <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind .
              </p>
            </div>
          </div>


          <div className={ERP.timelineItem}>
            <div className={`${ERP.timelineIcon} ${ERP.yello}`}>
              <FaPencilAlt />
            </div>
            <div className={ERP.timelineContent}>
              <h4>Front End Developer at Google Company <span className={ERP.date}>2017-2018</span></h4>
              <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>





   </div>
  )
}

export default Experiance