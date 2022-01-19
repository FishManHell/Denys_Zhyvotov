import React from 'react';
import {BlockSkills, SkillBar, TitleBlockSkills} from "../../../styled_components/Heading/LearnMore";

const Skill = ({text, width}) => {
    return (
        <BlockSkills>
            <TitleBlockSkills>{text}</TitleBlockSkills>
            <SkillBar width={width}/>
        </BlockSkills>
    );
};

export default Skill;