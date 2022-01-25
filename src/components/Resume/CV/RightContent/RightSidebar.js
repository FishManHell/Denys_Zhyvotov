import React from 'react';
import {RightSection} from "../../../../styled_components/Heading/LearnMore";
import SkillsContent from "./SkillsContent";
import EducationContent from "./EducationContent";
import ExperienceContent from "./ExperienceContent";

const RightSidebar = () => {

    return (
        <RightSection>
            <SkillsContent/>
            <EducationContent/>
            <ExperienceContent/>
        </RightSection>
    );
};

export default RightSidebar;