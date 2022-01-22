import AboutMe from "../../components/AbouteMe/AboutMe";
import VGH from "../../components/GoalsHobbies/VGH";
import Resume from "../../components/Resume/Resume";
import Portfolio from "../../components/Portfolio/Portfolio";
import ContactComponent from "../../components/Contact/ContactComponent";
import {Navigate} from "react-router-dom";

export const RoutePage = [
    {path: '/', element: <AboutMe/>},
    {path: 'vgn', element: <VGH/>},
    {path: 'resume', element: <Resume/>},
    {path: 'sites', element: <Portfolio/>},
    {path: 'contact', element: <ContactComponent/>},
    {path: '*', element: <Navigate to={'/'}/>}
]