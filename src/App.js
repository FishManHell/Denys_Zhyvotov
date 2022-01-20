import './App.css';
import {WrapperApp} from "./styled_components/App_style";
import Heading from "./components/Heading/Heading";
import Navigation from "./components/Navigation/Navigation";
import VGH from "./components/GoalsHobbies/VGH";
import AboutMe from "./components/AbouteMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactComponent from "./components/Contact/ContactComponent";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";

function App() {

    return (
        <WrapperApp>
            <Heading/>
            <Navigation/>
            <Switch>
                <Route exact path={['/', '/home']} component={AboutMe}/>
                <Route exact path={'/vgn'} component={VGH}/>
                {/*<Route exact path={'/skills'} component={Skills}/>*/}
                <Route exact path={'/resume'} component={Resume}/>
                <Route exact path={'/sites'} component={Portfolio}/>
                <Route exact path={'/contact'} component={ContactComponent}/>
            </Switch>
            <Footer/>
        </WrapperApp>
    );
}

export default App;
