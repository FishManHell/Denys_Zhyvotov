import './App.css';
import {WrapperApp} from "./styled_components/App_style";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Heading/Heading";
import Footer from "./components/Footer/Footer";
import {RoutePage} from "./utils/RouterArrayObj/routePage";

function App() {

    return (
        <WrapperApp>
            <Navigation/>
            <Heading/>
            <Routes>
                {RoutePage.map(page => <Route key={page.path} path={page.path} element={page.element}/>)}
            </Routes>
            <Footer/>
        </WrapperApp>
    );
}

export default App;