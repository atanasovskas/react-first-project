import React from "react"

export default function MainContent(){
    return(
        <div className="main">

            <div className="header">
                <h1>Simona Atanasovska</h1>
                <h3>Frontend developer</h3>
                <h6>atanasovskasimona.com</h6>
            </div>
            <div className="buttons">
                <div className="button1">
                    <img className="mail" src={require('./images/mail.png')} alt={""}/>
                    <span>Email</span>
                </div>
                <div className="button2">
                    <img className="li" src={require('./images/li.png')} alt={""}/>
                    <span>Linkedin</span>
                </div>
            </div>
            <div className="paragraphs">
                <h1>About</h1>
                <p>Software engineering student at Faculty Of Computer Science And Engineering in Skopje. Throughout my studies, I have acquired a solid foundation in programming languages such as HTML, CSS, JavaScript, and Java. I am a quick learner, a team player, and I possess excellent problem-solving skills. </p>
                <h1>Intrests</h1>
                <p>Artist.Singer.Traveler.Fashionista.Dog lover.Reader.Movie fanatic</p>
            </div>
        </div>

    )
}