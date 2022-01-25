import React from 'react';
import {
    BlockEducation,
    TitleRightBlock,
    WrapperForEducation
} from "../../../styled_components/Heading/LearnMore";
import EducationItem from "./EducationItem";
import {education} from "../../../utils/someArrayObj";

const EducationContent = () => {

    return (
        <BlockEducation>
            <TitleRightBlock>Education</TitleRightBlock>
            <WrapperForEducation>
                {education.map(exp => <EducationItem key={exp.id} {...exp}/>)}
            </WrapperForEducation>
        </BlockEducation>
    );
};

export default EducationContent;