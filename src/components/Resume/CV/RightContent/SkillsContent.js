import React from 'react';
import {
    LeftSkills,
    MainBlockSkills,
    RightSkills,
    WrapperForSkills
} from "../../../../styled_components/Heading/LearnMore";
import {leftSkillsArray, rightSkillsArray} from "../../../../utils/someArrayObj";
import Skill from "./Skill";
import TitleTextComponent from "./TitleTextComponent";

const SkillsContent = () => {
    return (
        <MainBlockSkills>
            <TitleTextComponent text={'Skills:'}/>
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