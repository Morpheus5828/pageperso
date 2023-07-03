import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import "./App.css"


const App = () => {

   return (
      <>
         <Navbar/>
         <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/*"} element={<Home/>}/>
                <Route path={"/education"} element={<Education/>}/>
                <Route path={"/project"} element={<Project/>}/>
                <Route path={"/experience"} element={<Experience/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
         </BrowserRouter>
      </>
   )
};

export default App;
