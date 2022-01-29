import React from 'react';
import {SimpleTextVGN, WrapperItemVGN} from "../../styled_components/GoalsHobbies/GoalsHobbies_styles";
import {TitleText} from "../../styled_components/Universal_styles";

const LongGoals = () => {
    return (
        <WrapperItemVGN>
            <TitleText margin_bottom={'50px'}>
                long term goals
            </TitleText>
            <SimpleTextVGN>
                My long term goal is to be in respectable position in that organization. <br/>(Team-Lead or CTO)
            </SimpleTextVGN>
        </WrapperItemVGN>
    );
};

export default LongGoals;
