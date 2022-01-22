import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import {CircleItem} from "../../../styled_components/Heading/LearnMore";
import {CircleStyles} from "../../../utils/ObjectsStyle";
import 'react-circular-progressbar/dist/styles.css';


const CircleBar = ({percent, size}) => {

    return (
        <CircleItem width={size.width} height={size.height}>
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