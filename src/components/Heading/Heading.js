import React from 'react';
import {
    BlockHeadingButton,
    BlockHeadingText, ButtonHeading,
    HeadingText,
    WrapperHeading
} from "../../styled_components/Heading/Heading_styles";

const Heading = ({openInform}) => {
    return (
        <WrapperHeading name={'home'}>
            <BlockHeadingText>
                <HeadingText>Front-End Developer</HeadingText>
            </BlockHeadingText>
            <BlockHeadingButton onClick={openInform}>
                <ButtonHeading>learn more</ButtonHeading>
            </BlockHeadingButton>
        </WrapperHeading>
    );
};

export default Heading;
