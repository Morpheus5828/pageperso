import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Parcours from "./pages/Parcours";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";


const App = () => {

   return (
      <>
         <Navbar/>
         <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Accueil/>}/>
                <Route path={"/*"} element={<Accueil/>}/>
                <Route path={"/parcours"} element={<Parcours/>}/>
                <Route path={"/projet"} element={<Projet/>}/>
                <Route path={"/experience"} element={<Experience/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
         </BrowserRouter>
      </>
   )
};

export default App;
