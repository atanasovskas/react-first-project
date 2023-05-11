import React from "react"


export default function Footer(){
    return(
        <div className="footer">
            <img className="fb" src={require('./images/fb.png')} alt={""}/>
            <img className="git" src={require('./images/git.png')} alt={""}/>
            <img className="insta"src={require('./images/insta.png')} alt=""/>
        </div>
    )
}