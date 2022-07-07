import React from "react";
import "../Jamshid/Jamshid.css"
import sms from "../../asets/Jamshid/Frame1.png"
import video from "../../asets/Jamshid/Frame2.png"
import speed from "../../asets/Jamshid/Frame3.png"
import imagePage1 from "../../asets/Jamshid/image1.png"
import imagePage2 from "../../asets/Jamshid/image2.png"
import imagePage3 from "../../asets/Jamshid/image3.png"

export function Jamshid(){
    return(
        <div className="newspaper">
            <div className="newspaper-texts">
                <p className="p-1">SOLUTIONS</p>
                <h2>How Sprig helps ensure every product decision is customer-informed</h2>
                <p className="p-2">And helps through every stage of your product.</p>
            </div>
            <div className="newspaper-page-1">
                <div className="newspaper-left">
                    <img src={sms} alt="" />
                    <p>Contextual Microsurveys</p>
                    <p className="p-3">Keep a constant pulse on your customer’s experience. Continuously surface user
                         insights via in-product, email, or link microsurveys to improve your product and acquisition funnels.</p>
                    <button>Learn More</button>
                </div>
                <div className="newspaper-right">
                    <img src={imagePage1} alt="" />
                </div>
            </div>
            <div className="newspaper-page-1">
                <div className="newspaper-left">
                    <img src={video} alt="" />
                    <p>Video Questions</p>
                    <p className="p-3">Have more customer conversations, in less time.
                     Conduct one-to-one user interviews anytime, anywhere in order to validate ideas and build a roadmap your customers will love.</p>
                    <button>Learn More</button>
                </div>
                <div className="newspaper-right">
                    <img src={imagePage2} alt="" />
                </div>
            </div>
            <div className="newspaper-page-1">
                <div className="newspaper-left">
                    <img src={speed} alt="" />
                    <p>Concept Testing</p>
                    <p className="p-3">Quickly iterate designs based on feedback from your users. Conduct rapid and remote concept testing
                     to ensure your new concept, design, and messaging hit the mark by collecting feedback from your customers before launch.</p>
                    <button>Learn More</button>
                </div>
                <div className="newspaper-right">
                    <img src={imagePage3} alt="" />
                </div>
            </div>
        </div>
    )
}