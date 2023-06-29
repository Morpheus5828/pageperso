import React from 'react';
import './Navbar.css'
function Navbar() {


    return (
       <nav className={"nav"}>
           <ul className={"nav_menu"}>
               <li className={"nav_item"}><a href={"/home"} className={"nav_link"}>About me</a></li>
               <li className={"nav_item"}><a href={"/education"} className={"nav_link"}>Education</a></li>
               <li className={"nav_item"}><a href={"/project"} className={"nav_link"}>Project</a></li>
               <li className={"nav_item"}><a href={"/experience"} className={"nav_link"}>Experience</a></li>
               <li className={"nav_item"}><a href={"/contact"} className={"nav_link"}>Contact</a></li>
           </ul>
       </nav>
    );
}

export default Navbar;
