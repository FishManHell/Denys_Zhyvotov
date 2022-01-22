import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import {CircleItem} from "../../../styled_components/Heading/LearnMore";
import {CircleStyles, stylesPortfolio} from "../../../utils/ObjectsStyle";
import 'react-circular-progressbar/dist/styles.css';


const CircleBar = ({percent}) => {

    return (
        <CircleItem width={stylesPortfolio.width} height={stylesPortfolio.height}>
            <CircularProgressbar
                strokeWidth={5}
                value={percent}
                percentage={percent}
                text={`${percent}%`}
                styles={{...CircleStyles}}
            />
        </CircleItem>
    );
};

export default CircleBar;