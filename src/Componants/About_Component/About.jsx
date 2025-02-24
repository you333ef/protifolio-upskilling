import React from "react";
import EDITING from "./about.module.css";
import { PiLampPendantDuotone } from "react-icons/pi";
import { PiPlanetDuotone } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";

const About = () => {
 

  return (
    <div>

<section className={EDITING.aboutSection}>
      <div className="container ">
        
       
        <div className={EDITING.sectionTitle}>
          <h4>ABOUT US</h4>
          <h2>WHO AM I?</h2>
        </div>

      
        <div className={EDITING.sectionText}>
          <p>
           <span className={EDITING.amazing}> Hi I'm Jackson Ford</span> On my way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand times and everything
            that was left from its origin would be the word (and) and the Little Blind Text should
            turn around and return to its own, safe country.
          </p>
          <p>
            Even the all-powerful Painting has no control about the blind text it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>

     
        <div className={`g-2 mt-4 row ${EDITING.Hoksha}`}>
          <div className={`col-md-6 col-lg-3 col-12  ${EDITING.oopopop1}`}>
            <div className={EDITING.cardBox}>
              <div className={EDITING.icon}><PiLampPendantDuotone />
              </div>
              <h3>Graphic Design</h3>
            </div>
          </div>
          
          <div className={`col-md-6 col-lg-3 col-12 ${EDITING.oopopop2}`}>
            <div className={EDITING.cardBox}>
              <div className={EDITING.icon}><PiPlanetDuotone />
              </div>
              <h3>Web Design</h3>
            </div>
          </div>
          
          <div className={`col-md-6 col-lg-3 col-12 ${EDITING.oopopop3}`}>
          <div className={EDITING.cardBox}>
              <div className={EDITING.icon}><GrMoney />
              </div>
              <h3>Software</h3>
            </div>
            </div>

          
          <div className={`col-md-6 col-lg-3 col-12 ${EDITING.oopopop4}`}>
            <div className={EDITING.cardBox}>
              <div className={EDITING.icon}><i className="fas fa-mobile-alt"></i></div>
              <h3>Application</h3>
            </div>
          </div>
        </div>

      </div>
    </section>


       
    </div>
  );
};

export default About;
