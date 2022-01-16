import React from 'react';
import {
    WrapperSomeSkills
} from "../../styled_components/Skills/Skills_styles";
import SkillComponent from "./SkillComponent";
import {arrayObjSkills} from "../../utils/skillsArrayObj";

const SomeSkills = () => {
    const countingPercent = (percent, setPercent, maxWidth, setWidth) => {
        let id = setInterval(frame, 10)
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
        <WrapperSomeSkills>
            {arrayObjSkills.map(skill => <SkillComponent key={skill.name} {...skill} countingPercent={countingPercent}/>)}
        </WrapperSomeSkills>
    );
};

export default SomeSkills;
