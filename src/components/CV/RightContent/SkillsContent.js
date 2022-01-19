import React from 'react';
import {
    LeftSkills,
    MainBlockSkills,
    RightSkills,
    TitleRightBlock,
    WrapperForSkills
} from "../../../styled_components/Heading/LearnMore";
import {leftSkillsArray, rightSkillsArray} from "../../../utils/skillsArrayObj";
import Skill from "./Skill";

const SkillsContent = () => {
    return (
        <MainBlockSkills>
            <TitleRightBlock>Skills:</TitleRightBlock>
            <WrapperForSkills>
                <RightSkills>
                    {rightSkillsArray.map(skill => <Skill key={skill.text} {...skill}/>)}
                </RightSkills>
                <LeftSkills>
                    {leftSkillsArray.map(skill => <Skill key={skill.text} {...skill}/>)}
                </LeftSkills>
            </WrapperForSkills>
        </MainBlockSkills>
    );
};

export default SkillsContent;