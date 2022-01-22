import './App.css';
import {Background, WrapperApp} from "./styled_components/App_style";
import {Route, Switch} from "react-router-dom";
import AboutMe from "./components/AbouteMe/AboutMe";
import VGH from "./components/GoalsHobbies/VGH";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactComponent from "./components/Contact/ContactComponent";
import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Heading/Heading";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <WrapperApp>
            <Navigation/>
            <Heading/>
            <Switch>
                <Route exact path={['/', '/home']} component={AboutMe}/>
                <Route exact path={'/vgn'} component={VGH}/>
                <Route exact path={'/resume'} component={Resume}/>
                <Route exact path={'/sites'} component={Portfolio}/>
                <Route exact path={'/contact'} component={ContactComponent}/>
            </Switch>
            <Footer/>
        </WrapperApp>
    );
}

export default App;
