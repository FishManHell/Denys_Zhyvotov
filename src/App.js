import './App.css';
import {WrapperApp} from "./styled_components/App_style";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Heading/Heading";
import Footer from "./components/Footer/Footer";
import {RoutePage} from "./utils/RouterArrayObj/routePage";
import {useState} from "react";

function App() {
    const [burger, setBurger] = useState(false);

    const handleCloseMenu = () => setBurger(false);

    const handleOpenCloseManu = () => setBurger(!burger);

    return (
        <WrapperApp>
            <Navigation burger={burger} close={handleCloseMenu} closeOpen={handleOpenCloseManu}/>
            <Heading/>
            <Routes>
                {RoutePage.map(page =>  <Route key={page.path} path={page.path} element={page.element}/>)}
            </Routes>
            <Footer/>
        </WrapperApp>
    );
}

export default App;