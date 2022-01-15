import React, {useEffect, useState} from 'react';
import {
    BackgroundSkills,
    BlockItemSkills,
    PercentBackgroundSkills, SectionSkills, Skill,
    TitleTextSkill
} from "../../styled_components/Skills/Skills_styles";
import {HeaderMiniBlock, MiniBlockSkills, SectionMiniBlock} from "../../styled_components/Skills/SkillsTest";

const SkillComponent = ({percent, name, countingPercent}) => {
    const maxWidth = 200
    const [width, setWidth] = useState(0);
    const [percentNew, setPercent] = useState(0);

    useEffect(() => {
        countingPercent(percent, setPercent, maxWidth, setWidth)
    }, [])

    return (
        <BlockItemSkills>
            <TitleTextSkill>{name}</TitleTextSkill>
            <Skill width={`${maxWidth}px`}>
                <BackgroundSkills width={`${width}px`}>
                    <PercentBackgroundSkills>{`${percentNew}%`}</PercentBackgroundSkills>
                </BackgroundSkills>
            </Skill>
        </BlockItemSkills>
    );
};

export default SkillComponent;
