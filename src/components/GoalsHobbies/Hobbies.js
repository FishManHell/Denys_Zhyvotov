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
                I travel, play sports, read, watch movies, series, listen to music, solve problems, I play board games
            </SimpleTextVGN>
        </WrapperItemVGN>
    );
};

export default Hobbies;
