import React, {useMemo, useState} from 'react';
import {
    BlockEducationInform, Education,
    Information,
    TitleInform
} from "../../../styled_components/Heading/LearnMore";
import CircleBar from "./CircleBar";

const stylesPortfolio = {width: '120px', height: '120px'};

const EducationItem = ({text, title, percent, countingPercent}) => {
    const [width, setWidth] = useState(0);
    const [percentNew, setPercent] = useState(0);

    useMemo(() => {
        countingPercent(percent, setPercent, stylesPortfolio.width, setWidth)
    }, [])

    return (
        <Education>
            <CircleBar width={width} percent={percentNew} size={stylesPortfolio}/>
            <BlockEducationInform>
                <TitleInform>{title}</TitleInform>
                <Information>{text}</Information>
            </BlockEducationInform>
        </Education>
    );
};

export default EducationItem;