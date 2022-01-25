import React from 'react';
import {BlockNamePosition, FullName, Line, Position} from "../../../../styled_components/Heading/LearnMore";

const NamePosition = ({name, position}) => {
    return (
        <BlockNamePosition>
            <FullName>{name}</FullName>
            <Position>{position}</Position>
            <Line/>
        </BlockNamePosition>
    );
};

export default NamePosition;