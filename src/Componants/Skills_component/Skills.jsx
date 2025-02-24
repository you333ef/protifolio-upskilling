import React from "react";
import EDT from "./skills.module.css";

const Skills = (props) => {
console.log(props)

  return (
     <section className={EDT.ExperiancePapa}>
         <div className="container">
      <div className={EDT.sectionTitle}>
             <h4>MY SPECIALTY</h4>
             <h2>MY SKILLS</h2>
       </div>
       <div className={EDT.sectionText}>
                     <p>
                      <span className={EDT.amazing}>The Big Oxmox advised her not to do so,</span>  because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                     </p>
       </div>
         
       <div className={`row ${EDT.OprionsPapa}`}>
         <div className={`col-md-12 col-lg-6 col-12 ${EDT.option1}`}>
           <div className={EDT.skill}>
             <span>Photoshop</span>
             <div className={EDT.progressBar}>
               <div className={EDT.progress} style={{ width: '75%', backgroundColor: ' #066edd' }}>
                 75%
               </div>
             </div>
           </div>
         </div>
   
         <div className={`col-md-12 col-lg-6 col-12 ${EDT.option2}`}>
           <div className={EDT.skill}>
             <span>HTML5</span>
             <div className={EDT.progressBar}>
               <div className={EDT.progress} style={{ width: '85%', backgroundColor: 'orange' }}>
                 85%
               </div>
             </div>
           </div>
         </div>
   
         <div className={`col-md-12 col-lg-6 col-12 ${EDT.option3}`}>
           <div className={EDT.skill}>
             <span>WordPress</span>
             <div className={EDT.progressBar}>
               <div className={EDT.progress} style={{ width: '70%', backgroundColor: '#2fa499' }}>
                 70%
               </div>
             </div>
           </div>
         </div>
   
         <div className={`col-md-12 col-lg-6 col-12 ${EDT.option4}`}>
           <div className={EDT.skill}>
             <span>jQuery</span>
             <div className={EDT.progressBar}>
               <div className={EDT.progress} style={{ width: '60%', backgroundColor: '#ec5453' }}>
                 60%
               </div>
             </div>
           </div>
         </div>
   
         <div className={`col-md-12 col-lg-6 col-12 ${EDT.option5}`}>
           <div className={EDT.skill}>
             <span>CSS3</span>
             <div className={EDT.progressBar}>
               <div className={EDT.progress} style={{ width: '90%', backgroundColor: '#a84cb8' }}>
                 90%
               </div>
             </div>
           </div>
         </div>
   
         <div className={`col-md-12 col-lg-6 col-12 ${EDT.option6}`}>
           <div className={EDT.skill}>
             <span>SEO</span>
             <div className={EDT.progressBar}>
               <div className={EDT.progress} style={{ width: '80%', backgroundColor: '#4054b2' }}>
                 80%
               </div>
             </div>
           </div>
         </div>
       </div>
   
   
         </div>
       </section>
  );
};

export default Skills;
