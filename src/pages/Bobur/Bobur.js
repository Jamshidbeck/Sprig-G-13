import React from "react";
import "./bobur.css"
import photo from "./img/IMAGE.png"
export function Bobur(){
    return(
        <div className="Bobur">
            <div className="section1">
                <div className="sectionL">

                    
                   <div className="section_left_text">
                   <p>In-context user research that's fast and reliable.</p>
                   <span>Ensure user research happens early and often with Sprig's targeted microsurveys, video questions, and more.</span>


                   <div className="sec_1_btn">
                    <button>Start for Free</button>
                    <button>Talk to Sales</button>
                   </div>
                   </div>
    

                </div>


                <div className="sectionR">
                    <img id="img" src={photo} alt="" />
                </div>

            
            </div>
           
        </div>
    )
}