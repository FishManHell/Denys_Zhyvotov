import React from 'react';
import {
    BlockHeadingButton,
    BlockHeadingText, ButtonHeading,
    HeadingText,
    WrapperHeading
} from "../../styled_components/Heading/Heading_styles";

const Heading = () => {
    return (
        <WrapperHeading>
            <BlockHeadingText>
                <HeadingText>Web developer</HeadingText>
            </BlockHeadingText>
            <BlockHeadingButton>
                <ButtonHeading>learn more</ButtonHeading>
            </BlockHeadingButton>
        </WrapperHeading>
    );
};

export default Heading;
