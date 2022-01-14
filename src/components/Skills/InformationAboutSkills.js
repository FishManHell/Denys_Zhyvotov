import React from 'react';
import {
    TextLinkContactMe,
    SomeTextAboutSkills,
    WrapperInfAboutSkills
} from "../../styled_components/Skills/Skills_styles";
import {Link} from "react-scroll";
import {TitleText} from "../../styled_components/Universal_styles";

const InformationAboutSkills = () => {
    return (
        <WrapperInfAboutSkills>
            <TitleText margin_bottom={'50px'}>my skills</TitleText>
            <SomeTextAboutSkills>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur distinctio
                dolore eveniet laborum necessitatibus odit omnis quas quis sunt. Ad asperiores eos ipsa ipsum nihil
                numquam quaerat quidem voluptatem?
            </SomeTextAboutSkills>
            <SomeTextAboutSkills>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur distinctio
                dolore eveniet laborum necessitatibus odit omnis quas quis sunt. Ad asperiores eos ipsa ipsum nihil
                numquam quaerat quidem voluptatem?
            </SomeTextAboutSkills>
            <Link to={'contact me'} spy={true} smooth={true} duration={1000}>
                <TextLinkContactMe>contact me </TextLinkContactMe>
            </Link>
        </WrapperInfAboutSkills>
    );
};

export default InformationAboutSkills;
