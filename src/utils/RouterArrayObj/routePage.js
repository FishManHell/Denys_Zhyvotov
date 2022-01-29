import AboutMe from "../../components/AbouteMe/AboutMe";
import Targets from "../../components/GoalsHobbies/Targets";
import Resume from "../../components/Resume/Resume";
import MyProjects from "../../components/Projects/MyProjects";
import {Navigate} from "react-router-dom";

export const RoutePage = [
    {path: '/', element: <AboutMe/>},
    {path: 'targets', element: <Targets/>},
    {path: 'resume', element: <Resume/>},
    {path: 'works', element: <MyProjects/>},
    {path: '*', element: <Navigate to={'/'}/>}
]

export const arrayItemLink = [
    {link: '/', name: 'home'},
    {link: '/targets', name: 'targets'},
    {link: '/resume', name: 'resume'},
    {link: '/works', name: 'works'},
]