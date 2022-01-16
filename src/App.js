import './App.css';
import {WrapperApp} from "./styled_components/App_style";
import Heading from "./components/Heading/Heading";
import Navigation from "./components/Navigation/Navigation";
import VGH from "./components/GoalsHobbies/VGH";
import AboutMe from "./components/AbouteMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import EducExp from "./components/EducExp/EducExp";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactComponent from "./components/Contact/ContactComponent";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import LearnMore from "./components/Heading/MoreInfromation/LearnMore";

function App() {
    const [open, setOpen] = useState(true);

    const openMoreInformation = () => setOpen(true);

    const closeMoreInformation = () => setOpen(false);

    return (
        <WrapperApp>
            <Heading openInform={openMoreInformation}/>
            <Navigation/>
            <VGH/>
            <AboutMe/>
            <Skills/>
            <Resume/>
            <EducExp/>
            <Portfolio/>
            <ContactComponent/>
            <Footer/>
            <LearnMore open={open} closeInform={closeMoreInformation}/>
        </WrapperApp>
    );
}

export default App;
