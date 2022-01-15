import React from 'react';
import Photo from "./Photo";
import Information from "./Information";
import {SectionAboutMe} from "../../styled_components/AbouteMe/Aboute_styles";

const AboutMe = () => {
    return (
        <SectionAboutMe name={'about me'}>
            {/*<Photo/>*/}
            <Information/>
        </SectionAboutMe>
    );
};

export default AboutMe;
