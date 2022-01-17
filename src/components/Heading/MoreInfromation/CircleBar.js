import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import {CircleItem} from "../../../styled_components/Heading/LearnMore";

const Styles = {
    path: {
        transform: "rotate(180deg)",
        transformOrigin: "center center",
        strokeLinecap: "butt",
        stroke: '#00dcc6',
    },
    trail: {
        strokeWidth: 0
    },
    text: {
        fontSize: '1rem',
        fontWeight: 500,
        animation: "fadein 2s",
        fill: '#222',
    }
}

const CircleBar = ({percent, size}) => {

    return (
        <CircleItem width={size.width} height={size.height}>
            <CircularProgressbar
                strokeWidth={5}
                value={percent}
                percentage={percent}
                text={`${percent}%`}
                styles={{...Styles}}
            />
        </CircleItem>
    );
};

export default CircleBar;