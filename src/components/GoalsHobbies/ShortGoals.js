import React from 'react';
import {SimpleTextVGN, WrapperItemVGN} from "../../styled_components/VGH/VGH_styles";
import {TitleText} from "../../styled_components/Universal_styles";

const ShortGoals = () => {
    return (
        <WrapperItemVGN>
            <TitleText margin_bottom={'50px'}>
                short term goals
            </TitleText>
            <SimpleTextVGN>
                My short term goal is to get a job in required company where
                I can utilize my skills & improve my career path.
            </SimpleTextVGN>
        </WrapperItemVGN>
    );
};

export default ShortGoals;
