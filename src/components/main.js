import React from "react";
import "../components/Main.css"
import { Jamshid } from "../pages/Jamshid/Jamshid";
import { Qoshimcha } from "../pages/Qoshimcha/Qoshimcha";
import { Muhammadsaid } from "../pages/Muhammadsaid/Muhammadsaid";
import { Bobur } from "../pages/Bobur/Bobur";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import  "../components/Navbar";
import "../components/Footer.css";

export function Main(){
    return(
        <div className="main">
            <Navbar/>
            <Bobur/>
            <Muhammadsaid/>
            <Jamshid/>
            <Qoshimcha/>
            <Footer/>
        </div>
    )
}