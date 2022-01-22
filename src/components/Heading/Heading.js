import React from 'react';
import {
    BlockHeadingText,
    HeadingText,
    WrapperHeading
} from "../../styled_components/Heading/Heading_styles";

const Heading = () => {
    return (
        <WrapperHeading>
            <BlockHeadingText>
                <HeadingText>Denys Zhyvotov</HeadingText>
                <HeadingText>Front-End Developer</HeadingText>
            </BlockHeadingText>
        </WrapperHeading>
    );
};

export default Heading;
