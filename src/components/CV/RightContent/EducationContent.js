import React from 'react';
import {
    BlockEducation,
    TitleRightBlock,
    WrapperForEducation
} from "../../../styled_components/Heading/LearnMore";
import {experiences} from "../../../utils/ExperienceArray";
import EducationItem from "./EducationItem";

const EducationContent = () => {

    const countingPercent = (percent, setPercent, maxWidth, setWidth) => {
        let id = setInterval(frame, 50)
        let width = 0

        function frame() {
            if (width >= percent) {
                clearInterval(id)
            } else {
                width++
                setPercent(width)
            }
        }
        setWidth((maxWidth * percent) / 100)
        return width
    }


    return (
        <BlockEducation>
            <TitleRightBlock>Education</TitleRightBlock>
            <WrapperForEducation>
                {experiences.map(exp => <EducationItem key={exp.id} {...exp} countingPercent={countingPercent}/>)}
            </WrapperForEducation>
        </BlockEducation>
    );
};

export default EducationContent;