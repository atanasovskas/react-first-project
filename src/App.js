import React from "react"
import Nav from "./application/Nav";
import MainContent from "./application/MainContent";
import Footer from "./application/Footer";
import './App.css'

export default function App(){
    return(
        <div className="app">
            <Nav/>
            <MainContent/>
            <Footer/>
        </div>
    )
}