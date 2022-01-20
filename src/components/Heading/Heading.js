import React from 'react';
import {
    BlockHeadingButton,
    BlockHeadingText, ButtonHeading,
    HeadingText,
    WrapperHeading
} from "../../styled_components/Heading/Heading_styles";

const Heading = () => {
    return (
        <WrapperHeading name={'home'}>
            <BlockHeadingText>
                <HeadingText>Front-End Developer</HeadingText>
            </BlockHeadingText>
        </WrapperHeading>
    );
};

export default Heading;
