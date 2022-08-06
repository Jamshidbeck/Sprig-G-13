import React from "react";
import "../components/main.css"
import { Jamshid } from "../pages/Jamshid/Jamshid";
import { Qoshimcha } from "../pages/Qoshimcha/qoshimcha";
import { Muhammadsaid } from "../pages/Muhammadsaid/Muhammadsaid";
import { Bobur } from "../pages/Bobur/Bobur";
// import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
// import  "../components/navbar";
import "../components/footer.css";

export function Main(){
    return(
        <div className="main">
            {/* <Navbar/> */}
            <Bobur/>
            <Muhammadsaid/>
            <Jamshid/>
            <Qoshimcha/>
            <Footer/>
        </div>
    )
}