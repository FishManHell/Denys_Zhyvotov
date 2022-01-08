import React from 'react';
import {
    BlockButtonContMe, ButtonContMe,
    SomeTextAboutSkills,
    TitleText,
    WrapperInfAboutSkills
} from "../../styled_components/Skills/Skills_styles";

const InformationAboutSkills = () => {
    return (
        <WrapperInfAboutSkills>
            <TitleText>My Skills</TitleText>
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
            <BlockButtonContMe>
                <ButtonContMe>contact me </ButtonContMe>
            </BlockButtonContMe>
        </WrapperInfAboutSkills>
    );
};

export default InformationAboutSkills;
