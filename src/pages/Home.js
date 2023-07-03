import React from 'react';
import "./css/Home.css"
import img1 from '../assets/images/photo_identite.jpeg'
import img2 from '../assets/images/competition_qarma.jpg'
import img3 from '../assets/images/logo-amu.png'

const Home = () => {
    return (
        <div className={"div_accueil"}>
            <div className={"div_presentation"}>
                <img src={img1} alt="img1" width={"250"} height={"250"}/>
                <div>
                    <h2>Hello World !</h2>
                    <p className={"text_presentation"}>
                        My name is Marius THORRE and I live in "La Ciotat", France. <br/>
                        I am a  computer science student, affiliated to Aix-Marseille University in
                        France. <br/>
                        When I started to study AI in last Bachelor's degree year, I realized that I convey <br/>
                        an important feeling for this computer science field. In fact, this one is really creative <br/>
                        and exciting. It already permit to resolve many problems in the Humans problem, like in <br/>
                        medecine with resolution of neurodegeneratives or psychologist diseases like Alzheimer, <br/>
                        Parkinson or Charcot. I wait of this formation that it can give me more tools to try to resolve <br/>
                        bigs challenges in AI.
                    </p>
                </div>
                <img className={"img3"} src={img3} alt= "img3" width={300} height={100}/>
            </div>
            <div className={"div_climbing"}>
                <p className={"text_hobbies"}>
                    In front of my studdies, I am practising Climbing. This one is a very good sport to relax your mind <br/>
                    and let it go. I began when I was 15 years old in College. And since this time, I carried on. <br/>
                    Last year with my team, we were to French Climbing Championship in Fontainebleau, Paris.
                </p>
                <img className={"img2"} src={img2} alt="img2" width={"500"} height={"600"}/>
            </div>

        </div>
    );
};

export default Home;