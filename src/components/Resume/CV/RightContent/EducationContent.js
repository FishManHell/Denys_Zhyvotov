import React from 'react';
import {BlockEducation, WrapperForEducation} from "../../../../styled_components/Heading/LearnMore";
import EducationItem from "./EducationItem";
import {education} from "../../../../utils/someArrayObj";
import TitleTextComponent from "./TitleTextComponent";

const EducationContent = () => {

    return (
        <BlockEducation>
            <TitleTextComponent text={'Education:'}/>
            <WrapperForEducation>
                {education.map(exp => <EducationItem key={exp.id} {...exp}/>)}
            </WrapperForEducation>
        </BlockEducation>
    );
};

export default EducationContent;