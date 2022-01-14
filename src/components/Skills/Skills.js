import React from 'react';
import {SectionSkills, WrapperInfoSkills} from "../../styled_components/Skills/Skills_styles";
import InformationAboutSkills from "./InformationAboutSkills";
import SomeSkills from "./SomeSkills";
import {Container} from "../../styled_components/Universal_styles";

const Skills = () => {
    return (
        <SectionSkills name={'skills'}>
            <Container>
                <WrapperInfoSkills>
                    <InformationAboutSkills/>
                    <SomeSkills/>
                </WrapperInfoSkills>
            </Container>
        </SectionSkills>
    );
};

export default Skills;
