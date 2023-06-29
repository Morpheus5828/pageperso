import React from 'react';
import "./Home.css"
import img1 from '../assets/images/photo_identite.jpeg'

const Home = () => {
    return (
        <div className={"div_accueil"}>
            <div className={"div_presentation"}>
                <h1 className={"name"}>THORRE MARIUS</h1>
                <img src={img1} alt="" width={"200"} height={"200"}/>
            </div>
            <p>
                I am computer science student. I am affiliated to Aix Marseille University in
                France. <br/>
                I will begin my first Master year in Artificial Intelligence and Automatic Learning
            </p>

        </div>
    );
};

export default Home;