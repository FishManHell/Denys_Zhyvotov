import React from 'react';
import {SimpleTextVGN, WrapperItemVGN} from "../../styled_components/GoalsHobbies/GoalsHobbies_styles";
import {TitleText} from "../../styled_components/Universal_styles";

const Hobbies = () => {
    return (
        <WrapperItemVGN>
            <TitleText margin_bottom={'50px'}>
                Hobbies
            </TitleText>
            <SimpleTextVGN>
                My short term goal is to get a job in required company where
                I can utilize my skills & improve my career path.
            </SimpleTextVGN>
        {/* придумать hobie для себя  поискать в инете*/}
        </WrapperItemVGN>
    );
};

export default Hobbies;
