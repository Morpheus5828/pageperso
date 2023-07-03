import React from 'react';
import "./css/Experience.css"

const Experience = () => {
    return (
        <div className={"div_experience"}>
            <div className={"internship"}>
                <h4>Internship at <a href={"https://qarma.lis-lab.fr/"} rel="noopener noreferrer" target={"_blank"}>QARMA - LIS Team</a> (2023)</h4>
                <h4>Internship at <a href={"https://talep.lis-lab.fr/"} rel="noopener noreferrer" target={"_blank"}>TALEP - LIS Team</a> (2022)</h4>
                <h4>Internship at <a href={"https://coala.lis-lab.fr/"} rel="noopener noreferrer" target={"_blank"}>COALA - LIS Team</a> (2021)</h4>
            </div>
            <div className={"employment"}>
                <h4>AED TICE at COLBERT High School in Marseille, France (April 2022 - September 2023)</h4>
                <h4>Handicap Assistant at "Mission Handicap" an Aix-Marseille-University Association (Since September 2022)</h4>
                <h4>Cashier at ALDI in La Ciotat, France (Summer 2020)</h4>
            </div>
        </div>
    );
};

export default Experience;