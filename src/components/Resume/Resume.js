import React from 'react';
import {Container} from "../../styled_components/Universal_styles";
import {SectionResume, WrapperResume} from "../../styled_components/Resume/Resume_styled";
import LearnMore from "./CV/LearnMore";
import ButtonCV from "./ButtonCV";

const Resume = () => {
    return (
        <SectionResume>
            <Container>
                <WrapperResume>
                    <LearnMore/>
                    <ButtonCV value={'download resume'}/>
                </WrapperResume>
            </Container>
        </SectionResume>
    );
};

export default Resume;
