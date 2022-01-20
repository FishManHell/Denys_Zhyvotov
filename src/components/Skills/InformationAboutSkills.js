import React from 'react';
import {
    TextLinkContactMe,
    SomeTextAboutSkills,
    WrapperInfAboutSkills
} from "../../styled_components/Skills/Skills_styles";
import {Link} from "react-router-dom";

const InformationAboutSkills = () => {
    return (
        <WrapperInfAboutSkills>
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
            <Link to={'/contact'}>
                <TextLinkContactMe>contact me </TextLinkContactMe>
            </Link>
        </WrapperInfAboutSkills>
    );
};

export default InformationAboutSkills;
