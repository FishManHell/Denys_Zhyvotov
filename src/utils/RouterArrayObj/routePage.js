import AboutMe from "../../components/AbouteMe/AboutMe";
import VGH from "../../components/GoalsHobbies/VGH";
import Resume from "../../components/Resume/Resume";
import MyProjects from "../../components/Portfolio/MyProjects";
import ContactComponent from "../../components/Contact/ContactComponent";
import {Navigate} from "react-router-dom";

export const RoutePage = [
    {path: '/', element: <AboutMe/>},
    {path: 'vgn', element: <VGH/>},
    {path: 'resume', element: <Resume/>},
    {path: 'sites', element: <MyProjects/>},
    {path: 'contact', element: <ContactComponent/>},
    {path: '*', element: <Navigate to={'/'}/>}
]


export const arrayItemLink = [
    {link: '/', name: 'home'},
    {link: '/vgn', name: 'vgn'},
    {link: '/resume', name: 'resume'},
    {link: '/sites', name: 'sites'},
    {link: '/contact', name: 'contact'},
]
