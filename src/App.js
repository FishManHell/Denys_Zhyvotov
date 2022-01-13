import './App.css';
import {WrapperApp} from "./styled_components/App_style";
import Heading from "./components/Heading/Heading";
import Navigation from "./components/Navigation/Navigation";
import VGH from "./components/ValuesGoalsHobbies/VGH";
import AboutMe from "./components/AbouteMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import EducExp from "./components/EducExp/EducExp";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactComponent from "./components/Contact/ContactComponent";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <WrapperApp>
            <Heading/>
            <Navigation/>
            <VGH/>
            <AboutMe/>
            <Skills/>
            <Resume/>
            <EducExp/>
            <Portfolio/>
            <ContactComponent/>
            <Footer/>
        </WrapperApp>
    );
}

export default App;
