import React from 'react';
import {
    BlockEducationInform, Education,
    Information,
    TitleInform
} from "../../../../styled_components/Heading/LearnMore";
import CircleBar from "./CircleBar";
import useHook from "../../../../utils/CustomHook/useSkillBar";

const EducationItem = ({text, title, percent}) => {
    const {width, percentNew} = useHook(percent);

    return (
        <Education>
            <CircleBar width={width} percent={percentNew}/>
            <BlockEducationInform>
                <TitleInform>{title}</TitleInform>
                <Information>{text}</Information>
            </BlockEducationInform>
        </Education>
    );
};

export default EducationItem;