import React from 'react';
import Information from "./Information";
import {SectionAboutMe} from "../../styled_components/AbouteMe/Aboute_styles";

const AboutMe = () => {
    return (
        <SectionAboutMe name={'about me'}>
            <Information/>
        </SectionAboutMe>
    );
};

export default AboutMe;
