import React from 'react';
import './Navbar.css'
function Navbar() {
    return (
       <nav className={"nav"}>
           <ul className={"nav_menu"}>
               <li className={"nav_item"}><a href={"#"} className={"nav_link"}>Accueil</a></li>
               <li className={"nav_item"}><a href={"#"} className={"nav_link"}>Parcour</a></li>
               <li className={"nav_item"}><a href={"#"} className={"nav_link"}>Projet</a></li>
               <li className={"nav_item"}><a href={"#"} className={"nav_link"}>Expérience</a></li>
               <li className={"nav_item"}><a href={"#"} className={"nav_link"}>Contact</a></li>
           </ul>
       </nav>
    );
}

export default Navbar;
