import React, {useEffect, useState} from 'react';
import {
    BlockEducationInform, Education,
    Information,
    TitleInform
} from "../../styled_components/Heading/LearnMore";
import CircleBar from "./CircleBar";

const EducationItem = ({text, title, percent, countingPercent, open}) => {
    const [size,] = useState({width: '120px', height: '120px'})
    const [width, setWidth] = useState(0);
    const [percentNew, setPercent] = useState(0);

    useEffect(() => {
        if (percentNew === 0 && open) {
            countingPercent(percent, setPercent, size.width, setWidth)
        }
    }, [open])

    return (
        <Education>
            <CircleBar width={width} percent={percentNew} size={size}/>
            <BlockEducationInform>
                <TitleInform>{title}</TitleInform>
                <Information>{text}</Information>
            </BlockEducationInform>
        </Education>
    );
};

export default EducationItem;