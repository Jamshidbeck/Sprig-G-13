import React from "react";
import "../components/Main.css"
import { Jamshid } from "../pages/Jamshid/Jamshid";
import { Qoshimcha } from "../pages/Qoshimcha/Qoshimcha";

export function Main(){
    return(
        <div className="main">
            <Jamshid/>
            <Qoshimcha/>
        </div>
    )
}