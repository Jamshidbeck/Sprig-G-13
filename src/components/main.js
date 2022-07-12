import React from "react";
import "../components/Main.css"
import { Jamshid } from "../pages/Jamshid/Jamshid";
import { Qoshimcha } from "../pages/Qoshimcha/Qoshimcha";
import { Muhammadsaid } from "../pages/Muhammadsaid/Muhammadsaid";
import { Bobur } from "../pages/Bobur/Bobur";

export function Main(){
    return(
        <div className="main">
            <Bobur/>
            <Muhammadsaid/>
            <Jamshid/>
            <Qoshimcha/>
        </div>
    )
}