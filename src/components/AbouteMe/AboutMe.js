import React from 'react';
import Information from "./Information";
import {SectionAboutMe} from "../../styled_components/AbouteMe/Aboute_styles";
import {Container} from "../../styled_components/Universal_styles";

const AboutMe = () => {
    return (
        <SectionAboutMe>
            <Container>
                <Information/>
            </Container>
        </SectionAboutMe>
    );
};

export default AboutMe;
