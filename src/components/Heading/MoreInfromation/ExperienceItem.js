import React, {useEffect, useState} from 'react';
import {
    BlockExperienceInform, Experience,
    Information,
    TitleInform
} from "../../../styled_components/Heading/LearnMore";
import CircleBar from "./CircleBar";

const ExperienceItem = ({text, title, percent, countingPercent}) => {
    const [size,] = useState({width: '120px', height: '120px'})
    const [width, setWidth] = useState(0);
    const [percentNew, setPercent] = useState(0);

    useEffect(() => {
        countingPercent(percent, setPercent, size.width, setWidth)
    }, [])

    return (
        <Experience>
           <CircleBar width={width} percent={percentNew} size={size}/>
            <BlockExperienceInform>
                <TitleInform>{title}</TitleInform>
                <Information>{text}</Information>
            </BlockExperienceInform>
        </Experience>
    );
};

export default ExperienceItem;