import React from 'react';
import {BlockExperience, TitleRightBlock} from "../../../styled_components/Heading/LearnMore";
import {experienceArray} from "../../../utils/skillsArrayObj";
import Experience from "./Experience";

const ExperienceContent = () => {
    return (
        <BlockExperience>
            <TitleRightBlock>Work Experience:</TitleRightBlock>
            {experienceArray.map(exp => <Experience key={exp.id} {...exp}/>)}
        </BlockExperience>
    );
};

export default ExperienceContent;