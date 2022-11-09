import React from "react";
import Songs from "./songs";
import "./main.css";
import Header from "../header/header";

export default function Main(){
    console.log(Songs);
    return <div className="main">
        <Header />
    </div>
}

