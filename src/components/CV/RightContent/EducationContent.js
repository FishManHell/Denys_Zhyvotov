import React from 'react';
import {
    BlockEducation,
    TitleRightBlock,
    WrapperForEducation
} from "../../../styled_components/Heading/LearnMore";
import EducationItem from "./EducationItem";
import {experiences} from "../../../utils/someArrayObj";

const EducationContent = () => {

    return (
        <BlockEducation>
            <TitleRightBlock>Education</TitleRightBlock>
            <WrapperForEducation>
                {experiences.map(exp => <EducationItem key={exp.id} {...exp}/>)}
            </WrapperForEducation>
        </BlockEducation>
    );
};

export default EducationContent;